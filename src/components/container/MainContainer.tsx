import React from "react";
import SideBar from "../Navbars/SideBar";
import GraphContainer from "./GraphContainer";
import TodayInterview from "./TodayInterview";
import PostedJobs from "./PostedJobs";
import CalendarComponent from "../atoms/Calendar";
import UpcomingCard from "../atoms/UpcomingCard";
import ActivityCard from "../atoms/ActivityCard";
import HiringCard from "../atoms/HiringCard";
import CandidateStatus from "../atoms/CandidateStatus";

const upcomingEvents = [
  {
    date: "07",
    month: "Feb",
    title: "Interview with Designer",
    createdBy: "Stella",
    time: "10 A.M to 11 A.M",
    bg: "bg-blue-200",
    text: "text-blue-500",
  },
  {
    date: "08",
    month: "Feb",
    title: "Meeting with Team",
    createdBy: "John",
    time: "1 P.M to 2 P.M",
    bg: "bg-gray-500",
    text: "text-gray-100",
  },
  {
    date: "09",
    month: "Feb",
    title: "Project Review",
    createdBy: "Emma",
    time: "3 P.M to 4 P.M",
    bg: "bg-gray-300",
    text: "text-gray-900",
  },
];

const activities = [
  {
    icon: "emojione-v1:person-pouting",
    name: "John Doe",
    role: "Python Developer",
    description: "Interview with Stella",
    time: "15 mins ago",
  },
  {
    icon: "fluent-emoji:person-medium-light",
    name: "Jane Smith",
    role: "Frontend Developer",
    description: "Meeting with John",
    time: "30 mins ago",
  },
  {
    icon: "fluent-emoji:person-vampire-light",
    name: "Alice Johnson",
    role: "UI/UX Designer",
    description: "Project Review with Emma",
    time: "1 hour ago",
  },
];

const HiringUpdates = [
  {
    icon: "fluent-emoji:person-pouting-light",
    name: "John Doe",
    description: "Python Developer",
    time: "15 mins ago",
  },
  {
    icon: "noto:person-red-hair",
    name: "Jane Smith",
    description: "Python Developer",
    time: "30 mins ago",
  },
  {
    icon: "noto:bearded-person",
    name: "Alice Johnson",
    description: "Python Developer",
    time: "1 hour ago",
  },
  {
    icon: "emojione:person-pouting",
    name: "Alice Johnson",
    description: "Python Developer",
    time: "1 hour ago",
  },
];

const MainContainer = () => {
  return (
    <div className="flex my-10 p-1 gap-1">
      <SideBar />
      <div className="py-3 pl-10 flex flex-col w-[94%]">
        <h1 className="text-xl">HR Employee</h1>
        <p className="text-gray-500 my-3">
          Enjoy your selecting potential candidates Tracking and Management
          System.
        </p>
        <div className="w-[100%] my-3">
          <GraphContainer />

          <div className="flex gap-2 w-[100%] ">
            <div className="w-[65%]">
              <TodayInterview />
              <PostedJobs />
              <CandidateStatus />
            </div>
            <div className="w-[34%] border-none">
              <CalendarComponent />
              <div className="my-6  ml-4 w-[83%]">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold">Upcomings</h1>
                  <h3 className="text-sm text-blue-500 underline ">View All</h3>
                </div>
              </div>
              <div>
                {upcomingEvents.map((event, index) => (
                  <UpcomingCard
                    key={index}
                    date={event.date}
                    month={event.month}
                    title={event.title}
                    createdBy={event.createdBy}
                    time={event.time}
                    text={event.text}
                    bg={event.bg}
                  />
                ))}
              </div>
              <div className="my-7 ml-4 w-[83%]">
                <div className=" flex justify-between items-center">
                  <h1 className="text-xl font-semibold">Activity</h1>
                  <h3 className="text-sm text-blue-500 underline ">View All</h3>
                </div>
                <div>
                  {activities.map((activity, index) => (
                    <ActivityCard
                      key={index}
                      icon={activity.icon}
                      name={activity.name}
                      role={activity.role}
                      description={activity.description}
                      time={activity.time}
                    />
                  ))}
                </div>
              </div>
              <div className="my-7 ml-4 w-[83%]">
                <div className=" flex justify-between items-center">
                  <h1 className="text-xl font-semibold">Hiring Candidates</h1>
                  <h3 className="text-sm text-blue-500 underline ">View All</h3>
                </div>
                <div>
                  {HiringUpdates.map((activity, index) => (
                    <HiringCard
                      key={index}
                      icon={activity.icon}
                      name={activity.name}
                      description={activity.description}
                      time={activity.time}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
