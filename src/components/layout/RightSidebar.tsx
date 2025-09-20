import React from 'react';
import { useAppSelector } from '../../hooks';

const RightSidebar: React.FC = () => {
  const { mode, rightSidebarOpen } = useAppSelector((state) => state.theme);

  const notifications = [
    {
      id: 1,
      image: '/no1.svg',
      title: 'You have a bug that needs to be fixed',
      time: 'Just now',
      type: 'bug'
    },
    {
      id: 2,
      image: '/no2.svg',
      title: 'New user registered',
      time: '59 minutes ago',
      type: 'user'
    },
    {
      id: 3,
      image: '/no3.svg',
      title: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
      type: 'subscription'
    },
    {
      id: 4,
      image: '/no4.svg',
      title: 'New order received',
      time: 'Today, 10:30 AM',
      type: 'order'
    },
    // {
    //   id: 5,
    //   image: '/no5.svg',
    //   title: 'Payment processed',
    //   time: 'Today, 9:15 AM',
    //   type: 'payment'
    // }
  ];

  const activities = [
    {
      id: 1,
      image: '/activity1.svg',
      title: 'You have a bug that needs to be fixed',
      time: 'Just now',
      type: 'bug'
    },
    {
      id: 2,
      image: '/activity2.svg',
      title: 'Released a new version',
      time: '59 minutes ago',
      type: 'release'
    },
    {
      id: 3,
      image: '/activity3.svg',
      title: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
      type: 'modification'
    },
    {
      id: 4,
      image: '/activity4.svg',
      title: 'Created a new project',
      time: 'Today, 10:30 AM',
      type: 'project'
    },
    {
      id: 5,
      image: '/activity5.svg',
      title: 'Updated user permissions',
      time: 'Today, 9:15 AM',
      type: 'permissions'
    }
  ];

  const contact = [
    {
      id: 1,
      image: '/activity1.svg',
      title: 'Lori Stevens',
      
    },
    {
      id: 2,
      image: '/activity2.svg',
      title: 'Erik Richards',      
          
    }
    ,{
      id: 3,
      image: '/activity3.svg',
      title: 'Kathryn Murphy',      
        
    }
    ,{
      id: 4,
      image: '/activity4.svg',
      title: 'Cody Fisher',      
     
    }
    ,{
      id: 5,
      image: '/activity5.svg',
      title: 'Wade Warren',      
          
    }
  ];

  if (!rightSidebarOpen) return null;

  return (
    <div className={`w-80 h-screen flex flex-col border-l ${
      mode === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      {/* Notifications Section */}
      <div className="p-6">
        <h3 className={`text-lg font-semibold mb-4 ${
          mode === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Notifications
        </h3>
        
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div key={notification.id} className={`p-3 `}>
              <div className="flex items-start space-x-3">
                <img 
                  src={notification.image} 
                  alt={notification.title}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <h4 className={`text-sm font-medium ${
                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {notification.title}
                  </h4>
                  <p className={`text-xs mt-1 ${
                    mode === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div className="px-6 pb-6">
        <h3 className={`text-lg font-semibold mb-4 ${
          mode === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Activities
        </h3>
        
        <div className="space-y-3">
          {activities.map((activity) => (
            <div key={`activity-${activity.id}`} className={`p-3 `}>
              <div className="flex items-start space-x-3">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <h4 className={`text-sm font-medium ${
                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {activity.title}
                  </h4>
                  <p className={`text-xs mt-1 ${
                    mode === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {activity.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts Section */}
      <div className="px-6 pb-6">
        <h3 className={`text-lg font-semibold mb-4 ${
          mode === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Contacts
        </h3>
        
        <div className="space-y-1">
          {contact.map((contact) => (
            <div key={`contact-${contact.id}`} className={`p-3 `}>
              <div className="flex items-start space-x-3">
                <img 
                  src={contact.image} 
                  alt={contact.title}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <h4 className={`text-sm font-medium ${
                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {contact.title}
                  </h4>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;