import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import UserStoryForm from './components/UserStoryForm';
import UserStoryTable from './components/UserStoryTable';
import EffortTotalsTable from './components/EffortTotalsTable';

const App = () => {
  const [userStories, setUserStories] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('userStories').onSnapshot((snapshot) => {
      const stories = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserStories(stories);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const addUserStory = async (newUserStory) => {
    await db.collection('userStories').add(newUserStory);
  };

  const updateUserStory = async (id) => {
    // Implement the logic to update a user story in Firestore
  };

  const deleteUserStory = async (id) => {
    await db.collection('userStories').doc(id).delete();
  };

  return (
    <div>
      <h1>Backlog Management Tool</h1>
      <UserStoryForm onAddUserStory={addUserStory} />
      <UserStoryTable
        userStories={userStories}
        onUpdateUserStory={updateUserStory}
        onDeleteUserStory={deleteUserStory}
      />
      <EffortTotalsTable userStories={userStories} />
    </div>
  );
};

export default App;