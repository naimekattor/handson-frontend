import React from 'react';
import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from '@mui/material';
const FeaturedEvents = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Opportunities</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Discover upcoming events and help requests in your community
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Event Card 1 */}
          <div className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-2xl">
            <div className="p-6 flex flex-col space-y-4">
              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200 w-fit">
                Environment
              </div>
              <h3 className="text-2xl font-bold">City Park Cleanup</h3>
              <p className="text-muted-foreground">
                Join us for a day of cleaning up Central Park and making our community greener.
              </p>
              <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Saturday, June 15, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Central Park, Main Entrance</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>12 volunteers registered</span>
                </div>
              </div>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Link href="/events/1" className="w-full">
                <button className="w-full bg-black shadow-2xl py-3 px-8 text-white cursor-pointer">Join Event</button>
              </Link>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-2xl">
            <div className="p-6 flex flex-col space-y-4">
              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-blue-50 text-blue-700 border-blue-200 w-fit">
                Education
              </div>
              <h3 className="text-2xl font-bold">After-School Tutoring</h3>
              <p className="text-muted-foreground">
                Help elementary school students with homework and reading skills.
              </p>
              <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Every Tuesday & Thursday</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>3:30 PM - 5:30 PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Washington Elementary School</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>5 volunteers registered</span>
                </div>
              </div>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Link href="/events/2" className="w-full">
                <button className="w-full bg-black shadow-2xl py-3 px-8 text-white cursor-pointer">Join Event</button>
              </Link>
            </div>
          </div>

          {/* Help Request Card */}
          <div className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-2xl">
            <div className="p-6 flex flex-col space-y-4">
              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-red-50 text-red-700 border-red-200 w-fit">
                Urgent Help Needed
              </div>
              <h3 className="text-2xl font-bold">Winter Clothing Drive</h3>
              <p className="text-muted-foreground">
                We need volunteers to help distribute winter clothes to homeless shelters.
              </p>
              <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Ongoing (Next 2 weeks)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Downtown Community Center</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>3 volunteers helping</span>
                </div>
              </div>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Link href="/help-requests/3" className="w-full">
                <button className="w-full bg-black shadow-2xl py-3 px-8 text-white cursor-pointer">Offer Help</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/events">
            <button variant="outline" className='bg-black shadow-2xl py-3 px-8 text-white cursor-pointer'>View All Opportunities</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;