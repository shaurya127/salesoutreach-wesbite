import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Globe, Video } from "lucide-react";

const BookDemoSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7, 1)); // August 2025
  const [selectedDate, setSelectedDate] = useState(19);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const timeSlots = ["6:00pm", "6:45pm", "7:30pm", "8:15pm"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days: Array<{
      day: number;
      isCurrentMonth: boolean;
      isPrevMonth: boolean;
    }> = [];

    // Previous month's trailing days
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      0
    );
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonth.getDate() - i,
        isCurrentMonth: false,
        isPrevMonth: true,
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isPrevMonth: false,
      });
    }

    // Next month's leading days
    const totalCells = Math.ceil(days.length / 7) * 7;
    for (let day = 1; days.length < totalCells; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isPrevMonth: false,
      });
    }

    return days;
  };

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const isDateAvailable = (day: number) => {
    // Mark certain dates as available (simplified logic)
    const availableDates = [19, 20, 21, 22, 26, 27, 28, 29, 4]; // Including some from next month
    return availableDates.includes(day);
  };

  return (
    <section className="w-full min-h-screen bg-[#0a0e1a] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Book a Demo
          </h1>
          <p className="text-gray-400 text-lg">Limited Demo Slots Available</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {/* Left Panel - Meeting Details */}
          <div className="lg:w-80 bg-[#1a1f2e] rounded-3xl p-6 h-fit">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                S
              </div>
              <div>
                <div className="text-gray-400 text-sm">SalesOutreach</div>
              </div>
            </div>

            <h3 className="text-white text-xl font-semibold mb-3">
              45 Min Meeting
            </h3>

            <div className="flex items-center text-gray-400 text-sm mb-4">
              <Clock className="w-4 h-4 mr-2" />
              45m
            </div>

            <div className="flex items-center text-gray-400 text-sm mb-4">
              <Video className="w-4 h-4 mr-2" />
              Google Meet
            </div>

            <div className="flex items-center text-gray-400 text-sm">
              <Globe className="w-4 h-4 mr-2" />
              Asia/Kolkata
            </div>
          </div>

          {/* Right Panel - Calendar and Time Slots */}
          <div className="flex-1 bg-[#1a1f2e] rounded-3xl p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Calendar */}
              <div className="flex-1">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white text-xl font-semibold">
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => navigateMonth(-1)}
                      className="p-2 text-gray-400 hover:text-white hover:bg-[#2a3441] rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => navigateMonth(1)}
                      className="p-2 text-gray-400 hover:text-white hover:bg-[#2a3441] rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="text-center text-gray-400 text-xs font-medium py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {renderCalendar().map((dateObj, index) => {
                    const isSelected =
                      dateObj.isCurrentMonth && dateObj.day === selectedDate;
                    const isAvailable =
                      dateObj.isCurrentMonth && isDateAvailable(dateObj.day);
                    const isToday =
                      dateObj.day === 4 &&
                      !dateObj.isCurrentMonth &&
                      currentDate.getMonth() === 7; // Sept 4th highlighted

                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (isAvailable) {
                            setSelectedDate(dateObj.day);
                            setSelectedTime(null);
                          }
                        }}
                        className={`
                          aspect-square p-2 text-sm font-medium rounded-lg transition-all
                          ${
                            !dateObj.isCurrentMonth
                              ? "text-gray-600"
                              : isSelected
                              ? "bg-[#2a3441] text-white ring-2 ring-blue-500"
                              : isToday
                              ? "bg-white text-black"
                              : isAvailable
                              ? "text-white hover:bg-[#2a3441] cursor-pointer"
                              : "text-gray-600 cursor-not-allowed"
                          }
                          ${
                            isAvailable && dateObj.isCurrentMonth
                              ? "relative"
                              : ""
                          }
                        `}
                        disabled={!isAvailable || !dateObj.isCurrentMonth}
                      >
                        {dateObj.day}
                        {isAvailable && dateObj.isCurrentMonth && (
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="md:w-64">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-medium">Thu 04</h4>
                  <div className="flex space-x-2 text-xs">
                    <button className="text-blue-400 bg-blue-400/20 px-2 py-1 rounded">
                      12h
                    </button>
                    <button className="text-gray-400 hover:text-white px-2 py-1 rounded">
                      24h
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        w-full p-3 rounded-xl text-left transition-all
                        ${
                          selectedTime === time
                            ? "bg-blue-600 text-white"
                            : "bg-[#2a3441] text-gray-300 hover:bg-[#343b4a] hover:text-white"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {selectedTime && (
                  <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-colors">
                    Book Meeting
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Can't find a suitable time?{" "}
            <a
              href="mailto:hello@salesoutreach.io"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Contact us directly
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookDemoSection;
