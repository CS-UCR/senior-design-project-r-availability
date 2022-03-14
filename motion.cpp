#include <iostream>
#include "wiringPi.h"
#include <ctime>
#include <mongocxx/client.hpp>
#include <mongocxx/instance.hpp>
#include <cstdint>
#include <vector>
#include <bsoncxx/json.hpp>
#include <mongocxx/stdx.hpp>
#include <mongocxx/uri.hpp>
#include <bsoncxx/builder/stream/helpers.hpp>
#include <bsoncxx/builder/stream/document.hpp>
#include <bsoncxx/builder/stream/array.hpp>

using bsoncxx::builder::stream::close_array;
using bsoncxx::builder::stream::close_document;
using bsoncxx::builder::stream::document;
using bsoncxx::builder::stream::finalize;
using bsoncxx::builder::stream::open_array;
using bsoncxx::builder::stream::open_document;

using namespace std;
struct task{
	signed char state;
	unsigned long period;
	unsigned elapsedTime;
	int (*TickFct)(int,int &, int &);
};
enum P_States{PSM_wait, out1, out2, out3, in1, in2, in3};
enum C_States{CSM_wait, send};
int connected=1;
int broken=0;
int leftSensor=24;
int rightSensor=27;
//int total_chairs;
//int occupants;
mongocxx::instance inst{};
const auto uri = mongocxx::uri{"mongodb+srv://ShubhamBatra:M%40gic2001@ravailability-database.dofjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"};
mongocxx::client conn {uri};
mongocxx::database db = conn["myFirstDatabase"];
mongocxx::collection coll = db["TTP"];
task task1, task2;
void reset(int &occupants){occupants=0;}
void update(int i, int &occupants){
	if((i>0)||(i<0&&occupants>1)){
	occupants+=i;}
}

int P_tick(int state, int &occupants, int &total_chairs){//function to change room count
	switch (state) { // transitions
		case PSM_wait://inital state and waiting for input
			if (digitalRead(leftSensor) == broken)
				state = out1;
			else if (digitalRead(rightSensor) == broken)
				state = in1;
			break;
		case out1://state for sensing movement out of room, leftsensor will be broken first
			if (digitalRead(leftSensor) == broken && digitalRead(rightSensor) == broken)
				state = out2;
			else if (digitalRead(leftSensor) == connected && digitalRead(rightSensor) == connected)
				state = PSM_wait;
			break;
		case out2://state for updating count from movement leaving room
			if (digitalRead(leftSensor) == connected && digitalRead(rightSensor) == connected) {
				state = PSM_wait;
				update(-1,occupants);
			}
			break;
		case in1://state for sensing movement into room, right sensor will be broken first
			if (digitalRead(rightSensor) == broken && digitalRead(leftSensor) == broken)
				state = in2;
			else if (digitalRead(rightSensor) == connected && digitalRead(leftSensor) == connected)
				state = PSM_wait;
			break;
		case in2://state for updating count from movement into room
			if (digitalRead(rightSensor) == connected && digitalRead(leftSensor) == connected) {
				state = PSM_wait;
				update(1,occupants);
			}
			break;
	}
	return state;
}
int C_tick(int state,int &occupants,int &total_chairs){//function to make api call to mongodb
	cout<<"Uploading to the database\n";
	time_t current=time(0);
	time(&current);
	tm *ltm=localtime(&current);
	//int cur=ltm;
	auto builder=bsoncxx::builder::stream::document{};
	bsoncxx::document::value doc_value=builder
		<<"room"<<"TTP"
		<<"occupancy"<<occupants
		<<"seats"<<total_chairs
		<<"time"<<ctime(&current)
		<<bsoncxx::builder::stream::finalize;
	coll.insert_one(doc_value.view());
	return state;
}

int main(){
	wiringPiSetup();
	pinMode(leftSensor,INPUT);
	pinMode(rightSensor,INPUT);
	int total_chairs=25;
	int occupants=0;
	bool track=true;
	time_t current=time(0);
	tm *ltm=localtime(&current);
	int cur=ltm->tm_min%15;//getting how many minutes it has been since the last 15 minute interval
	int direct_start=-1;//0 entering 1 exiting
	task *tasks[]={&task1,&task2};
	int numtasks=2;
	task1.state=PSM_wait;
	task1.period=1;
	task1.elapsedTime=task1.period;
	task1.TickFct=&P_tick;
	task2.state=CSM_wait;
	task2.period=1000;
	task2.elapsedTime=1000;
	task2.TickFct=&C_tick;	
	while(true){
		int temp=occupants;
		for(int i=0;i<numtasks;i++){
			if(tasks[i]->elapsedTime==tasks[i]->period&i!=1){
				tasks[i]->state=tasks[i]->TickFct(tasks[i]->state, occupants, total_chairs);
				tasks[i]->elapsedTime=0;
			}
			if(i!=1)
			tasks[i]->elapsedTime++;
			if(i==1){
				current=time(0);
				ltm=localtime(&current);
				cur=ltm->tm_min%2;//mod for time 15
				if(cur==0){
					//cout<<"checking if every two minutes\n";
				if(ltm->tm_sec%60==0){
					//cout<<"checking if start of minute\n";
				if(tasks[i]->elapsedTime==1000){
				tasks[i]->elapsedTime=0;
				tasks[i]->state=tasks[i]->TickFct(tasks[i]->state,occupants,total_chairs);}
				//else tasks[i]->elapsedTime=1000;
				}
				else tasks[i]->elapsedTime=1000;
				}
			}
			cur=ltm->tm_hour;
			if(cur==0)reset(occupants);
		}
		if(occupants!=temp)cout<<"There are "<<occupants<<" occupants\n"<<"There are "<<total_chairs<<" chairs\n";
		delay(1);
	}
}
