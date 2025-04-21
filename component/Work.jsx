import React from 'react';
import { ArrowRight, Calendar, Users } from "lucide-react"

const Work = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How HandsOn Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Making social impact simple and rewarding
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Join & Discover</h3>
            <p className="text-muted-foreground">
              Create your profile, select causes you care about, and discover volunteer opportunities.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Participate</h3>
            <p className="text-muted-foreground">
              Join events, respond to help requests, or create your own initiatives to help others.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M20 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" />
                <path d="M4 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M16 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M10.3 15.1l1.7-5.2" />
                <path d="M12 12h4" />
                <path d="M8.3 10.4l1.7-3.4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Track Impact</h3>
            <p className="text-muted-foreground">
              Log your volunteer hours, earn recognition, and see the difference you're making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;