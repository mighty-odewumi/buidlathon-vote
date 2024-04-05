import { useState } from 'react';

const candidates = [
  { id: 1, name: 'Candidate 1', post: 'President', votes: 0 },
  { id: 2, name: 'Candidate 2', post: 'Vice President', votes: 0 },
  { id: 3, name: 'Candidate 3', post: 'Secretary', votes: 0 },
];

const VoteInterface = () => {
  const [voted, setVoted] = useState(false); // Tracks if user has voted
  const [selectedCandidate, setSelectedCandidate] = useState(null); // Stores selected candidate ID

  {/* const handleVote = (candidateId) => {
    if (!voted) { // Only allow voting if not already voted
      setSelectedCandidate(candidateId);
      setVoted(true); // Prevent further voting
      const updatedCandidates = candidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, votes: candidate.votes + 1 } // Update vote count
          : candidate
      );
      // Update state with updated candidates (implement logic to update backend)
    }
  }; */}

  {/* const handleVote = (candidateId) => {
    if (!voted) { // Only allow voting if not already voted
      setSelectedCandidate(candidateId);
      setVoted(true); // Prevent further voting
      const updatedCandidates = candidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, votes: candidate.votes + 1 } // Update vote count directly
          : candidate
      );
      // Update state with updated candidates (implement logic to update backend)
      setCandidates(updatedCandidates); // Update state with the modified candidates array
    }
  }; */}

  /* const handleVote = (candidateId) => {
    if (!voted) { // Only allow voting if not already voted
      setSelectedCandidate(candidateId);
      setVoted(true); // Prevent further voting
      const updatedCandidates = candidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, votes: candidate.votes + 1 } // Update vote count directly
          : candidate
      );
  
      // Update state directly within handleVote
      setCandidates(updatedCandidates);
    }
  }; */
  
  const handleVote = (candidateId) => {
    if (!voted) {
      const updatedCandidates = candidates.map((candidate) =>
        candidate.id === candidateId ? { ...candidate, votes: candidate.votes + 1 } : candidate
      );
      setVoted(true);
      setSelectedCandidate(candidateId);
      // Update the candidates' votes
      // Here you would usually call an API to update the server-side data
      console.log(updatedCandidates);
    }
  };

  return (
    <>
    {/* <div className="flex flex-col space-y-4">
      <h1 className="text-xl font-medium text-gray-700">Vote for Your Choice</h1>
      <ul className="list-none space-y-4">
        {candidates.map((candidate) => (
          <li key={candidate.id} className="flex flex-col border rounded-md shadow-sm p-4">
            <h3 className="text-lg font-medium text-gray-700">{candidate.name}</h3>
            <p className="text-gray-500">{candidate.post}</p>
            <p className="text-gray-700 font-semibold">Votes: {candidate.votes}</p>
            <button
              className={`mt-2 px-4 py-2 rounded-md text-white ${
                voted || selectedCandidate === candidate.id
                  ? 'bg-gray-400 cursor-not-allowed' // Disable button if voted or same candidate selected
                  : 'bg-primary-500 hover:bg-primary-700 focus:outline-none focus:ring-primary-500 focus:ring-opacity-50'
              }`}
              disabled={voted || selectedCandidate === candidate.id}
              onClick={() => handleVote(candidate.id)}
            >
              Vote
            </button>
          </li>
        ))}
      </ul>
      {voted && <p className="text-center text-gray-500">Thank you for voting!</p>}
            </div> 

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Vote for Your Favorite Candidate</h1>
      {candidates.map((candidate) => (
        <div key={candidate.id} className="mb-4">
          <p className="text-lg font-semibold">{candidate.name}</p>
          <div className="bg-gray-200 rounded-full h-4 mt-1">
            <div
              className={`bg-blue-500 rounded-full h-full w-${(candidate.votes / 10) * 100}%`}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{candidate.votes} votes</p>
          <button
            onClick={() => handleVote(candidate.id)}
            disabled={voted && selectedCandidate !== candidate.id}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
          >
            {voted && selectedCandidate === candidate.id ? 'Voted' : 'Vote'}
          </button>
        </div>
      ))}
      </div>      */}

const [candidateVotes, setCandidateVotes] = useState(candidates);

const handleVote = (candidateId) => {
  // Check if the user has already voted
  const alreadyVoted = candidateVotes.find((candidate) => candidate.id === candidateId).voted;
  if (!alreadyVoted) {
    const updatedCandidates = candidateVotes.map((candidate) =>
      candidate.id === candidateId
        ? { ...candidate, votes: candidate.votes + 1, voted: true }
        : candidate
    );
    setCandidateVotes(updatedCandidates);
  }
};

return (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Vote for Your Favorite Candidate</h1>
    {candidateVotes.map((candidate) => (
      <div key={candidate.id} className="mb-4">
        <p className="text-lg font-semibold">{candidate.name}</p>
        <div className="bg-gray-200 rounded-full h-4 mt-1">
          <div
            className={`bg-blue-500 rounded-full h-full w-${(candidate.votes / 10) * 100}%`}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{candidate.votes} votes</p>
        <button
          onClick={() => handleVote(candidate.id)}
          disabled={candidate.voted}
          className={`mt-2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none ${
            candidate.voted && 'opacity-50 cursor-not-allowed'
          }`}
        >
          {candidate.voted ? 'Voted' : 'Vote'}
        </button>
      </div>
    ))}
  </div>
    </>
  );
};

export default VoteInterface;
