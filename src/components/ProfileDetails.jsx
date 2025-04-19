import { useState } from 'react';
import { Settings } from 'lucide-react';
import SubscriptionPlan from './SubscriptionPlan';

function ProfileDetails({ user }) {
  const { firstName, lastName, age, emailID, skills, about , isSubscribed } = user;
  const [subscriptionPlan, setsubscriptionPlan] = useState(isSubscribed);
  const [showPlans, setShowPlans] = useState(false);

  const handleSubscription = async () => {
    try {
      setShowPlans(!showPlans);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleManageSubscription = async () => {}

  return (
    <div className="mt-20 flex flex-col items-center text-center border-b pb-12">
      {/* name section */}
      <div>
        <h1 className="text-4xl font-medium text-gray-700">
          {firstName}
          {lastName && lastName}

          <span className="font-light text-gray-500"> , {+age && age}</span>
        </h1>
      </div>

      {/* email id */}
      <div>
        <p className="font-light text-gray-600 mt-3">{emailID}</p>
      </div>

      {/* skill */}
      <div className="flex mx-auto gap-1">
        {skills.map((skill) => (
          <span>{skill}</span>
        ))}
      </div>

      {/* about */}
      <div>
        <p className="mt-2 text-gray-500">{about && about}</p>
      </div>

      {/* Subscription Plan Button */}
      {subscriptionPlan ? (
        <button
          onClick={handleManageSubscription}
          className="mt-4 px-6 py-2 bg-white border hover:cursor-pointer border-blue-300 text-blue-600 font-semibold rounded-full shadow-sm hover:bg-blue-50 hover:scale-105 transition-all flex items-center justify-center gap-2"
        >
          <Settings className="w-4 h-4" />
          Manage Subscription
        </button>
      ) : (
        <>
          <button
            onClick={handleSubscription}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:cursor-pointer text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Upgrade to Pro 🚀
          </button>

          {/* Overlay for Plans */}
          {showPlans && <SubscriptionPlan setShowPlans={setShowPlans} />}
        </>
      )}
    </div>
  );
}

export default ProfileDetails;
