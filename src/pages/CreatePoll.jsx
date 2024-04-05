import { useState, useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase"; // Replace with your Firebase init
import SetPollDuration from "./SetPollDuration";

export default function CreatePoll() {
  const [title, setTitle] = useState("");
  const [candidates, setCandidates] = useState([{ name: "", post: "" }]);
  const candidateNameRef = useRef(null);
  const candidatePostRef = useRef(null);

  const handleAddCandidate = () => {
    setCandidates([...candidates, { name: "", post: "" }]);
  };

  const handleInputChange = (event, index) => {
    const newCandidates = [...candidates];
    if (event.target.name === "name") {
      newCandidates[index].name = event.target.value;
    } else if (event.target.name === "post") {
      newCandidates[index].post = event.target.value;
    }
    setCandidates(newCandidates);
  };

  const handleCreatePoll = async () => {
    const pollData = {
      title,
      candidates,
      id: Math.random().toString(36).substring(2, 15), // Generate random ID
    };

    try {
      await addDoc(collection(firestore, "polls"), pollData);
      // Clear the form after successful creation (optional)
      setTitle("");
      setCandidates([{ name: "", post: "" }]);
    } catch (error) {
      console.error("Error creating poll:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Poll</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 mb-2">
          Post Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primaryblue"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {candidates.map((candidate, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`candidateName-${index}`} className="block text-gray-700 mb-2">
            Candidate Name
          </label>
          <input
            type="text"
            id={`candidateName-${index}`}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primaryblue"
            value={candidate.name}
            name="name"
            onChange={(e) => handleInputChange(e, index)}
            ref={candidateNameRef}
          />
          <label htmlFor={`candidatePost-${index}`} className="block text-gray-700 mt-2">
            Candidate Post
          </label>
          <input
            type="text"
            id={`candidatePost-${index}`}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primaryblue"
            value={candidate.post}
            name="post"
            onChange={(e) => handleInputChange(e, index)}
            ref={candidatePostRef}
          />
        </div>
      ))}
      <button
        className="bg-primaryblue text-white py-2 px-4 rounded-md hover:bg-blue-700"
        onClick={handleAddCandidate}
      >
        Add Candidate
      </button>

      <SetPollDuration />

      <button
        className="bg-primaryblue text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700"
        onClick={handleCreatePoll}
      >
        Create Poll
      </button>
    </div>
  );
}
