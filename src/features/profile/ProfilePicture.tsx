import React from 'react';

const profilePictureStyles: React.CSSProperties = {
  width: 225,
  height: 225,
  overflow: 'hidden',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const ProfilePicture: React.FC = () => {
  return (
    <div style={profilePictureStyles}>
      <img src="https://avatars.githubusercontent.com/u/7457705?v=4" />
    </div>
  )
}