"use client"

import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import CampaignIcon from '@mui/icons-material/Campaign'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import CodeIcon from '@mui/icons-material/Code'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import Typography from '@mui/material/Typography'

export default function HackathonTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="white">
          Pre‑event (–36h to –24h)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <CampaignIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">Onboarding</Typography>
          <Typography>Onboarding, sponsor sessions, marketing push.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="white">
          Day 0
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <RocketLaunchIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">Kickoff</Typography>
          <Typography>Opening, keynote, team formation → hacking starts.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="white">
          Hack Period
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">36 hours</Typography>
          <Typography>Venue open 24/7.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="white">
          Day 2 (48h)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <EmojiEventsIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">Demo Day</Typography>
          <Typography>Final demos, judging, closing ceremony.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="white">
          Post‑event
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <WorkspacePremiumIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">Follow‑ups</Typography>
          <Typography>Prizes, mentorship follow‑ups, mini‑accelerator.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}


