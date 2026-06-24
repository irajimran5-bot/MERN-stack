import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const RateLimitedUI = () => {
  return (
    <div className="mx-auto max-w-6xl p-4 mt-4">
      <div className="alert alert-warning shadow-lg">
        <div>
          <span>⚠️ Too many requests! Please slow down a bit.</span>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const res = await axios.post("http://localhost:5001/api/notes");
        
        if (res.status === 429) { 
          setIsRateLimited(true);
          setLoading(false);
          return;
        }
        
        const data = await res.json();
        console.log(data);
        
        
        
      } catch (error) {
        console.log("Error fetching notes", error);
      } finally {
         
        setLoading(false);
      }
    };
    
    fetchNotes();
  }, []);

  return (
    <div className='min-h-screen bg-base-100 text-base-content'>
      <Navbar />
      
      {isRateLimited && <RateLimitedUI />}

      <div className='mx-auto max-w-6xl p-4'>
        {loading ? (
          <span className="loading loading-spinner loading-lg text-primary block mx-auto mt-10"></span>
        ) : (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Your Dashboard</h2>
           
            {notes.length === 0 && !isRateLimited && <p>No notes found. Create one!</p>}

            {}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {notes.map((note) => (
                <div key={note._id} className="card bg-base-200 shadow-xl p-4 border border-base-content/10">
                  <h3 className="font-bold text-lg text-secondary">{note.title}</h3>
                  <p className="text-sm mt-2">{note.content}</p>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;