import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'

export default function Homepage() {
  const getGreetingMessage = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      return 'Good Morning';
    } else if (currentTime < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };
  return (
    <Layout>
      {/* <Heading>Home page</Heading> */}
      {/* <Text my={6}>{currentUser?.email}</Text> */}

    
     
     <div class="flex-container">
    <div class="text-container">
      <h1 class="greeting"><span class="accent-color">{getGreetingMessage()}</span>,👋 Welcome to Our Bus Booking System</h1>
      <p class="intro-text">Book your bus and start your journey today!</p>
      <button class="start-booking-btn">Start Booking</button>
    </div>
  </div>
      
      
            
      {/* <Heading size='md' mt={8}>
        Some other links (only for reference):
      </Heading>
      <List>
        <ListItem>
          <Link to='/reset-password'>reset page</Link>
        </ListItem>
        <ListItem>
          <Link to='/forgot-password'>forgot page</Link>
        </ListItem>
        <ListItem>
          <Link to='/test'>test page</Link>
        </ListItem>
      </List> */}
    </Layout>
  )
}
