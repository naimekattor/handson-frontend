"use client";
import Footer from "@/component/Footer";
import ResponsiveAppBar from "@/component/ResponsiveAppBar";
import { Input } from "@mui/material";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [eventData, setEventData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/events/");
    const data = await response.json();
    setEventData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // handle category
  const handleCategory = (categoryName) => {
    if (categoryName === "All") {
      fetchData();
    } else {
      const filteredData = eventData.filter(
        (event) => event.category === categoryName
      );
      setEventData(filteredData);
    }
  };

  // handle search
  const handleSearch = (input) => {
    const updateData = eventData.filter(
      (data) =>
        data.title.toLowerCase().includes(input.toLowerCase()) ||
        data.description.toLowerCase().includes(input.toLowerCase())
    );
    setEventData(updateData);
  };

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    time: "",
    location: "",
    attendees: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("authToken"); // Get token from sessionStorage
    if (!token) {
      alert("You must be logged in to create an event");
      return;
    }
    console.log("Token:", sessionStorage.getItem("authToken"));

    const response = await fetch("http://localhost:5000/api/events/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Ensure proper format
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(`Error: ${errorData.message}`);
      return;
    }

    const data = await response.json();
    setEventData([...eventData, data]);
    setShowForm(false);
  };

  return (
    <section>
      <ResponsiveAppBar />
      <div className="container mx-auto md:px-0 px-[4%]">
        <div className="flex justify-between items-center py-8">
          <div>
            <h1 className="text-[26px] font-bold">Volunteer Events</h1>
            <p>Find and join volunteer opportunities in your community</p>
          </div>
          <div>
            <button
              className="md:py-2 py-1 md:px-4 px-2 bg-black text-white md:text-[18px] text-[14px]font-semibold rounded-md cursor-pointer"
              onClick={() => setShowForm(true)}
            >
              Create Event
            </button>
          </div>
        </div>
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <form onSubmit={handleSubmit} className="my-4">
                <div className="grid grid-cols-1 gap-4">
                  <Input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="time"
                    name="time"
                    placeholder="Time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="number"
                    name="attendees"
                    placeholder="Attendees"
                    value={formData.attendees}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="py-2 px-4 bg-black text-white text-[18px] font-semibold rounded-md cursor-pointer"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="py-2 px-4 bg-gray-500 text-white text-[18px] font-semibold rounded-md cursor-pointer"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="flex items-center gap-4 justify-between">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full border"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <select
            id="cars"
            className="border py-1 w-[150px]"
            onClick={(event) => handleCategory(event.target.value)}
          >
            <option value="All">All</option>
            <option value="Environment">Environment</option>
            <option value="Education">Education</option>
            <option value="Food Security">Food Security</option>
            <option value="Elderly Care">Elderly Care</option>
            <option value="Homelessness">Homelessness</option>
          </select>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-8">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-2xl"
            >
              <div className="p-6 flex flex-col space-y-4">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200 w-fit">
                  {event.category}
                </div>
                <h3 className="text-2xl font-bold">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 pt-0">
                <Link href={`/events/${event._id}`} className="w-full">
                  <button className="w-full bg-black shadow-2xl py-3 px-8 text-white cursor-pointer">
                    Join Event
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Page;
