// components/Notification.js
"use client"
import React from 'react';
import { useEffect } from 'react';
import { NotificationContainer, NotificationManager } from  'react-notifications';
import 'react-notifications/lib/notifications.css';



const Notification = ({ }) => {
  useEffect(() => {
    const notificationTimeout = setTimeout(() => {
      NotificationManager.info('Welcome User !');
      
    }, 3000);

    // Clear the timeout on unmount to avoid memory leaks
    return () => clearTimeout(notificationTimeout);
  }, []);
  return (
    <NotificationContainer  />
  );
};

export default Notification;
