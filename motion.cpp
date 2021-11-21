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
	switch (state) { // transitions
		case PSM_wait:
			if (digitalRead(leftSensor) == broken)
				state = out1;
			else if (digitalRead(rightSensor) == broken)
				state = in1;
			break;
		case out1:
			if (digitalRead(leftSensor) == broken && digitalRead(rightSensor) == broken)
				state = out2;
			else if (digitalRead(leftSensor) == connected && digitalRead(rightSensor) == connected)
				state = PSM_wait;
			break;
		case out2:
			if (digitalRead(leftSensor) == connected && digitalRead(rightSensor) == connected) {
				state = PSM_wait;
				occupants--;
			}
			break;
		case in1:
			if (digitalRead(rightSensor) == broken && digitalRead(leftSensor) == broken)
				state = in2;
			else if (digitalRead(rightSensor) == connected && digitalRead(leftSensor) == connected)
				state = PSM_wait;
			break;
		case in2:
			if (digitalRead(rightSensor) == connected && digitalRead(leftSensor) == connected) {
				state = PSM_wait;
				occupants++;
			}
			break;
	}
	return state;
}
int C_tick(int state){//function to make api call to mongodb
	return state;
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
	int numtasks=2;
	task1.state=PSM_wait;
	task1.period=1;
	task1.elapsedTime=task1.period;
	task1.TickFct=&P_tick;
	task2.state=CSM_wait;
	task2.period=500;
	task2.elapsedTime=task2.period;
	task2.TickFct=&C_tick;	
	while(true){
		int temp=occupants;
		for(int i=0;i<numtasks;i++){
			if(tasks[i]->elapsedTime==tasks[i]->period){
				tasks[i]->state=tasks[i]->TickFct(tasks[i]->state);
				tasks[i]->elapsedTime=0;
			}
			tasks[i]->elapsedTime++;
		}
		if(occupants!=temp)cout<<occupants<<endl;
		delay(1);
	}
}
