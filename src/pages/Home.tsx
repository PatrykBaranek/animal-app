import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-08-06T11:00:00');
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(() => calculateTimeLeft());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="countdown-timer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1>Countdown to August 6, 11 AM</h1>
      <div>
        {timeLeft.days !== undefined && (
          <>
            <motion.span variants={itemVariants}>
              {timeLeft.days} Days{' '}
            </motion.span>
            <motion.span variants={itemVariants}>
              {timeLeft.hours} Hours{' '}
            </motion.span>
            <motion.span variants={itemVariants}>
              {timeLeft.minutes} Minutes{' '}
            </motion.span>
            <motion.span variants={itemVariants}>
              {timeLeft.seconds} Seconds
            </motion.span>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Home;
