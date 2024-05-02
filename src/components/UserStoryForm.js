import React, { useState } from 'react';

const UserStoryForm = ({ onAddUserStory }) => {
  const [title, setTitle] = useState('');
  const [acceptanceCriteria, setAcceptanceCriteria] = useState('');
  const [notes, setNotes] = useState('');
  const [uxEffort, setUxEffort] = useState(0);
  const [uiEffort, setUiEffort] = useState(0);
  const [copyEffort, setCopyEffort] = useState(0);
  const [feEffort, setFeEffort] = useState(0);
  const [beEffort, setBeEffort] = useState(0);
  const [pmEffort, setPmEffort] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUserStory({
      title,
      acceptanceCriteria,
      notes,
      uxEffort,
      uiEffort,
      copyEffort,
      feEffort,
      beEffort,
      pmEffort,
    });
    // Reset form fields
    setTitle('');
    setAcceptanceCriteria('');
    setNotes('');
    setUxEffort(0);
    setUiEffort(0);
    setCopyEffort(0);
    setFeEffort(0);
    setBeEffort(0);
    setPmEffort(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form fields */}
      <button type="submit">Add User Story</button>
    </form>
  );
};

export default UserStoryForm;