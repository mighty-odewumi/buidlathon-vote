import { useState } from 'react';

const candidates = [
  { id: 1, name: 'Candidate 1', post: 'President', votes: 0 },
  { id: 2, name: 'Candidate 2', post: 'Vice President', votes: 0 },
  { id: 3, name: 'Candidate 3', post: 'Secretary', votes: 0 },
];

const VotingApp = () => {
  const maxVotes = 100;
  const [candidateVotes, setCandidateVotes] = useState(candidates);

  const handleVote = (candidateId) => {
    // Check if the user has already voted
    const alreadyVoted = candidateVotes.find((candidate) => candidate.id === candidateId).voted;
    if (!alreadyVoted) {
      const updatedCandidates = candidateVotes.map((candidate) =>
        candidate.id === candidateId ? { ...candidate, votes: candidate.votes + 1, voted: true } : candidate
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
              className="bg-blue-500 rounded-full h-full"
              style={{ width: `${(candidate.votes / maxVotes) * 100}%` }}
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
  );
};

export default VotingApp;
