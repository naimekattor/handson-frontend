"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { Calendar, Clock, MapPin, Share2, Users } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function EventPage() {
  const { eventId } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);
  const [showData, setShowData] = useState("Details");

  const event = {
    id: eventId,
    title: "City Park Cleanup",
    description:
      "Join us for a day of cleaning up Central Park and making our community greener. We'll be picking up trash, planting flowers, and helping to restore the natural beauty of our city's most beloved park. All cleaning supplies will be provided, but please bring your own water bottle and wear comfortable clothes that you don't mind getting dirty. This is a family-friendly event, so children are welcome when accompanied by an adult.",
    category: "Environment",
    date: "Saturday, June 15, 2024",
    time: "9:00 AM - 12:00 PM",
    location: "Central Park, Main Entrance",
    address: "5th Ave & E 72nd St, New York, NY 10021",
    organizer: {
      name: "Green City Initiative",
      image: "/placeholder.svg",
    },
    attendees: [
      { id: 1, name: "Alex Johnson", image: "/placeholder.svg" },
      { id: 2, name: "Maria Garcia", image: "/placeholder.svg" },
      { id: 3, name: "James Wilson", image: "/placeholder.svg" },
      { id: 4, name: "Sarah Lee", image: "/placeholder.svg" },
      { id: 5, name: "David Kim", image: "/placeholder.svg" },
    ],
    totalAttendees: 12,
    requirements: [
      "Wear comfortable clothes and closed-toe shoes",
      "Bring a reusable water bottle",
      "Sunscreen recommended",
      "All cleaning supplies will be provided",
    ],
    updates: [
      {
        id: 1,
        date: "June 10, 2024",
        content:
          "We've reached 10 volunteers! Thanks to everyone who's signed up. We still have room for more helpers.",
      },
      {
        id: 2,
        date: "June 5, 2024",
        content:
          "Weather forecast looks great for our cleanup day. We'll meet at the main entrance by the information booth.",
      },
    ],
  };

  const handleRegister = () => {
    // In a real app, you would send this to your API
    setIsRegistered(true);
  };

  const handleCancelRegistration = () => {
    // In a real app, you would send this to your API
    setIsRegistered(false);
  };

  const handleData = (dataCategory) => {
    setShowData(dataCategory);
  };

  return (
    <div className="container mx-auto py-8 md:py-12">
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <Link
              href="/events"
              className="text-sm text-muted-foreground hover:underline"
            >
              ← Back to Events
            </Link>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200 w-fit">
              {event.category}
            </div>
            <h1 className="text-3xl font-bold tracking-tight">{event.title}</h1>

            <div className="flex items-center space-x-2">
              <div className="h-8 w-8">
                <Image
                  src={event.organizer.image}
                  height={40}
                  className="rounded-full"
                  width={40}
                  alt={event.organizer.name}
                />
                <span>{event.organizer.name.charAt(0)}</span>
              </div>
              <div className="text-sm">
                Organized by{" "}
                <span className="font-medium">{event.organizer.name}</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                <span>{event.totalAttendees} volunteers registered</span>
              </div>
            </div>
          </div>

          <hr className="my-6" />

          <div className="mb-4 cursor-pointer">
            <ul
              className="flex items-center gap-4 p-2 border"
              onClick={(e) => handleData(e.target.innerText)}
            >
              <li className="p-2 text-[16px] font-semibold border">Details</li>
              <li className="p-2 text-[16px] font-semibold border">
                Attendees
              </li>
              <li className="p-2 text-[16px] font-semibold border">Updates</li>
              <li className="p-2 text-[16px] font-semibold border">
                Discussion
              </li>
            </ul>
          </div>

          {showData === "Details" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">About This Event</h2>
                <p className="text-muted-foreground">{event.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Location</h2>
                <p className="text-muted-foreground mb-2">{event.address}</p>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">
                    Map placeholder
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">What to Bring</h2>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {event.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {showData === "Attendees" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">
                Registered Volunteers ({event.totalAttendees})
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {event.attendees.map((attendee) => (
                  <div
                    key={attendee.id}
                    className="flex items-center space-x-3 p-3 rounded-md border"
                  >
                    <div>
                      <Image
                        src={attendee.image}
                        height={40}
                        className="rounded-full"
                        width={40}
                        alt={attendee.name}
                      />
                      <span>{attendee.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{attendee.name}</p>
                    </div>
                  </div>
                ))}
                {event.totalAttendees > event.attendees.length && (
                  <div className="flex items-center justify-center p-3 rounded-md border border-dashed">
                    <p className="text-muted-foreground">
                      +{event.totalAttendees - event.attendees.length} more
                      volunteers
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {showData === "Updates" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Event Updates</h2>
              {event.updates.length > 0 ? (
                <div className="space-y-4">
                  {event.updates.map((update) => (
                    <div key={update.id} className="p-4 rounded-md border">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">Update from Organizer</p>
                        <p className="text-sm text-muted-foreground">
                          {update.date}
                        </p>
                      </div>
                      <p className="text-muted-foreground">{update.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No updates yet.</p>
              )}
            </div>
          )}

          {showData === "Discussion" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Discussion</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-md border">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-8 w-8">
                      <span>JD</span>
                    </div>
                    <div>
                      <p className="font-medium">Jane Doe</p>
                      <p className="text-xs text-muted-foreground">
                        June 8, 2024
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Is there parking available near the entrance?
                  </p>
                </div>

                <div className="p-4 rounded-md border ml-8">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-8 w-8">
                      <Image
                        src={event.organizer.image}
                        height={40}
                        className="rounded-full"
                        width={40}
                        alt={event.organizer.name}
                      />
                      <span>GC</span>
                    </div>
                    <div>
                      <p className="font-medium">{event.organizer.name}</p>
                      <p className="text-xs text-muted-foreground">
                        June 8, 2024
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Yes, there's a parking lot on 5th Ave about a block away
                    from the entrance.
                  </p>
                </div>

                <div className="mt-6">
                  <textarea
                    placeholder="Ask a question or leave a comment..."
                    className="min-h-[100px] w-full p-2 border rounded-md"
                  />
                  <button className="mt-2 py-2 px-4 bg-black text-white">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <div className="rounded-lg border bg-card p-6">
              {!isRegistered ? (
                <button
                  className="w-full py-2 text-white mb-4 bg-black cursor-pointer"
                  size="lg"
                  onClick={handleRegister}
                >
                  Register for Event
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-md bg-green-50 p-3 text-green-700">
                    <p className="font-medium">You're registered!</p>
                    <p className="text-sm">
                      We look forward to seeing you there.
                    </p>
                  </div>
                  <button
                    variant="outlined"
                    className="w-full py-2 text-white mb-4 bg-black cursor-pointer"
                    onClick={handleCancelRegistration}
                  >
                    Cancel Registration
                  </button>
                </div>
              )}

              <button
                variant="outlined"
                className="w-full py-2 font-semibold border flex items-center justify-center text-black"
              >
                <Share2 className="mr-2 h-4 w-4 text-black" />
                Share Event
              </button>

              <hr className="my-6" />

              <div className="space-y-4">
                <h3 className="font-semibold">Event Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span>{event.category}</span>
                  </div>
                </div>
              </div>

              <hr className="my-6" />

              <div className="space-y-4">
                <h3 className="font-semibold">Organizer</h3>
                <div className="flex items-center space-x-3">
                  <div>
                    <Image
                      src={event.organizer.image}
                      height={40}
                      className="rounded-full"
                      width={40}
                      alt={event.organizer.name}
                    />
                    <span>{event.organizer.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{event.organizer.name}</p>
                    <Button variant="link" className="h-auto p-0 text-sm">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
