import React from 'react';

const EffortTotalsTable = ({ userStories }) => {
  const calculateTotalEffort = (field) => {
    return userStories.reduce((total, userStory) => total + (userStory[field] || 0), 0);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Total Effort</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>UX</td>
          <td>{calculateTotalEffort('uxEffort')}</td>
        </tr>
        <tr>
          <td>UI</td>
          <td>{calculateTotalEffort('uiEffort')}</td>
        </tr>
        <tr>
          <td>Copy</td>
          <td>{calculateTotalEffort('copyEffort')}</td>
        </tr>
        <tr>
          <td>FE</td>
          <td>{calculateTotalEffort('feEffort')}</td>
        </tr>
        <tr>
          <td>BE</td>
          <td>{calculateTotalEffort('beEffort')}</td>
        </tr>
        <tr>
          <td>PM</td>
          <td>{calculateTotalEffort('pmEffort')}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default EffortTotalsTable;