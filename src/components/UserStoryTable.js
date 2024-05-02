import React from 'react';

const UserStoryTable = ({ userStories, onUpdateUserStory, onDeleteUserStory }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Acceptance Criteria</th>
          <th>Notes</th>
          <th>UX Effort</th>
          <th>UI Effort</th>
          <th>Copy Effort</th>
          <th>FE Effort</th>
          <th>BE Effort</th>
          <th>PM Effort</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userStories.map((userStory, index) => (
          <tr key={userStory.id}>
            {/* Render user story fields */}
            <td>
              <button onClick={() => onUpdateUserStory(userStory.id)}>Edit</button>
              <button onClick={() => onDeleteUserStory(userStory.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserStoryTable;