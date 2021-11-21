#include <iostream>
#include "wiringPi.h"

using namespace std;
struct task{
	signed char state;
	unsigned long period;
	unsigned elapsedTime;
	int (*TickFct)(int);
};
enum P_States{PSM_wait, out1, out2, out3, in1, in2, in3};
enum C_States{CSM_wait, send};
int connected=1;
int broken=0;
int leftSensor=24;
int rightSensor=27;
int total_chairs;
int occupants;
task task1, task2;
int P_tick(int state){//function to change room count
	
}
int C_tick(int state){//function to make api call to mongodb

}

int main(){
	wiringPiSetup();
	pinMode(leftSensor,INPUT);
	pinMode(rightSensor,INPUT);
	total_chairs=25;
	occupants=0;
	bool track=true;
	int direct_start=-1;//0 entering 1 exiting
	task *tasks[]={&task1,&task2};
	task1.state=PSM_wait;
	task1.period=1;
	task1.elapsedTime=task1.period;
	task1.TickFct=&I_tick;
	task2	
	while(track){
		if(direct_start==-1){
			if(digitalRead(24)==broken){
				direct_start=1;
				cout<<"24 broken\n";
				}
			else if(digitalRead(27)==broken){
				cout<<"27 broken\n";
				direct_start=0;
			}
		}
		else if(direct_start==0){
			if(digitalRead(27)==connected){
				cout<<"Reconnected\n";
				direct_start=-1;
			}
			if(digitalRead(24)==broken){
				track=false;
			}
		}
		else if(direct_start==1){
			if(digitalRead(24)==connected){
				cout<<"Reconnected\n";
				direct_start=-1;
			}
			if(digitalRead(27)==broken)
				track=false;
		}

		delay(1);
	}
	if(direct_start==0)cout<<"Exiting";
	else if(direct_start==1)cout<<"Entering";
}
