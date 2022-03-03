#include "test_motion.cpp"
#include "gtest/gtest.h"
#include <ctime>

TEST (Update, Increment){
	int occupants=0;
	update(1,occupants);
	EXPECT_EQ(1,occupants);
}
TEST (Update, Decrement){
	int occupants = 25;
	update(-1,occupants);
	EXPECT_EQ(24,occupants);
}
TEST (Update, DecrementEdge){
	int occupants = 0;
	update(-1,occupants);
	EXPECT_EQ(0,occupants);
}
TEST (Reset, Rest){
	int occupants=15;
	reset(occupants);
	EXPECT_EQ(0,occupants);
}
TEST (Upload, Upload){
	//not sure how to test, maybe upload then check that last record matches uploaded record
	int occupants =20;
	int total_chairs= 40;
	int state=0;
	C_tick(state,occupants,total_chairs);
	bool result=false;
	bsoncxx::stdx::optional<bsoncxx::document::value>maybe_result=coll.find_one(document{}<<"occupancy"<<20<<finalize);
	if(maybe_result)result=true;
	EXPECT_TRUE(result);

}
int main(int argc, char **argv){
	::testing::InitGoogleTest(&argc, argv);
	return RUN_ALL_TESTS();
}
