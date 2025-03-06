import React from "react";

const CommunityAndNetworking: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-1/2 mb-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-2">
            Community and Networking
          </h2>
          <p className="mb-4 max-w-prose">
            Join these communities to network with other developers, ask
            questions, and find answers to your coding challenges. They are a
            great place to learn and share knowledge.
          </p>
          <ul className="list-disc pl-5">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://stackoverflow.com/"
                className="hover:underline text-blue-400"
              >
                Stack Overflow
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev.to/"
                className="hover:underline text-blue-400"
              >
                Dev.to
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.reddit.com/r/programming/"
                className="hover:underline text-blue-400"
              >
                Reddit Programming
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codeandcoffee.org/"
                className="hover:underline text-blue-400"
              >
                Code and Coffee
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.me/coding"
                className="hover:underline text-blue-400"
              >
                The Programmer&apos;s Hangout
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hashnode.com/"
                className="hover:underline text-blue-400"
              >
                Hash Node
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CommunityAndNetworking;
