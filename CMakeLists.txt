cmake_minimum_required (VERSION 3.22.1)

project(senior_project)

ADD_SUBDIRECTORY(googletest)

find_package(PkgConfig REQUIRED)
find_library(WIRINGPI_LIBRARIES NAMES wiringPi)



pkg_check_modules(LIBBSONXX REQUIRED libbsoncxx)
pkg_check_modules(LIBMONGOCXX REQUIRED libmongocxx)

include_directories(${LIBMONGOCXX_INCLUDE_DIRS} ${LIBBSONCXX_INCLUDE_DIRS})
link_directories(${LIBMONGOCXX_LIBRARY_DIRS} ${LIBBSONCXX_LIBARY_DIRS})


ADD_EXECUTABLE(motion motion.cpp)

ADD_EXECUTABLE(test test.cpp)

ADD_DEFINITIONS(-l wiringPi)

target_link_libraries(motion ${LIBMONGOCXX_LIBRARIES} ${LIBBSONCXX_LIBRARIES} ${WIRINGPI_LIBRARIES})
target_link_libraries(test ${LIBMONGOCXX_LIBRARIES} ${LIBBSONCXX_LIBRARIES} ${WIRINGPI_LIBRARIES})
TARGET_LINK_LIBRARIES(test gtest)
TARGET_COMPILE_DEFINITIONS(test PRIVATE gtest_disable_pthreads=ON)
