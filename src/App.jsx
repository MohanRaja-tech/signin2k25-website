import { useState, useEffect } from 'react'
import './App.css'
import './ParticleEffect.css'
import ParticleEffect from './ParticleEffect'
import kecLogo from './assets/keclogo.jpg'
import itLogo from './assets/ITlogo.png'
import avengersVideo from './assets/avengers.mp4'
import signinLogo from './assets/signinlogo.jpg'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [selectedEvent, setSelectedEvent] = useState(null)

  const eventDetails = {
    // Technical Events
    'stark-mind': {
      title: 'Paper Presentation',
      description: 'Present Your innovative ideas and research findings in a comprehensive paper presentation format.',
      rules: [
        '3 members compulsory per team',
        
        'Presentation time: 5 - 10 minutes',
        'Questions: 2-3 minutes',
        'Topics should be technology-related',
        'PowerPoint presentation mandatory must'
      ],
      coordinators: [
        { name: 'Immanuvel R', phone: '+918825503860' },
        { name: 'Kaviya S', phone: '+919360338092' },
        {name : 'MohanRaja V' , phone : '9003948329'}
      ],
      registrationLink: 'https://forms.gle/GNSMrgkYBQXNh5m88'
    },
    'code-infinity': {
      title: 'Mystery Code',
      description: 'Battle through mysterious coding challenges across the multiverse in this exciting two-round programming competition.',
      rules: [
        'Team size: Maximum 2 members per team',
        'No AI tools will be allowed during the competition',
        'Malpractices will lead to immediate disqualification',
        'First round: Quiz-based elimination',
        'Second round: Coding challenge with time constraints',
        'Duration: 10-15 minutes per team for coding round',
        'Team member rotation: First person codes initially, second person completes the remaining code',
        'Judged based on code completion and time taken',
        'Prizes awarded to top performing teams'
      ],
      coordinators: [
        { name: 'Sorna priya K', phone: '+916374959674' },
        { name: 'Pooja shree A E', phone: '+919791887251' }
      ],
      registrationLink: 'https://forms.gle/QFq724g2n4GwVusx7'
    },
    'shield-design': {
      title: 'Designing',
      description: 'Showcase your creative design and UI/UX skills in this visual competition worthy of the greatest heroes.',
      rules: [
        'Team size: Maximum 2 members per team',
        'AI tools are strictly prohibited',
        'Design tools allowed: Canva, Figma, and other professional design software',
        'Duration: 1 hour',
        'Theme will be provided on the spot',
        'Final submission in PDF/PNG format',
        'Judged on creativity, visual appeal, and adherence to theme',
        'Original work only - plagiarism will lead to disqualification'
      ],
      coordinators: [
        { name: 'Karthikeyan R', phone: '+918248626682' },
        { name: 'Nisar A', phone: '+919787795213' }
      ],
      registrationLink: 'https://forms.gle/Dpv5rh5mkxXdZcsEA'
    },
    // Non-Technical Events
    'thor-debate': {
      title: 'Flipflop',
      description: 'Wield the power of words like Mjolnir in this dynamic debate format where participants must adapt their stance instantly.',
      rules: [
        'Individual participation only',
        'Topic revealed 10 minutes before the event',
        'Participant should speak positively on the given topic',
        'When the buzzer sounds, participant must immediately switch to speaking negatively',
        'Continue alternating between positive and negative stance each time buzzer sounds',
        'Judged on adaptability, logic, presentation skills, and quick thinking',
        'Smooth transitions between opposing viewpoints are crucial',
        'Time duration will be announced on the event day'
      ],
      coordinators: [
        { name: 'Srisudharsan B', phone: '+916374676399' },
        { name: 'Dharun Prakash G T', phone: '+918838953935' }
      ],
      registrationLink: 'https://forms.gle/fBktmx4yLfExSFLj9'
    },
    'hulk-drama': {
      title: 'Melo Drama',
      description: 'Channel the harmonious power of the Avengers through music and vocal prowess in this melodic challenge.',
      rules: [
        'Team size: Maximum 5 members per team',
        'A song with lyrics will be played for the participants',
        'The music and lyrics will be stopped at a random point',
        'Participants must continue singing the remaining song from where it stopped',
        'Teams will be judged on accuracy, melody, and continuation flow',
        'Popular songs from various genres may be selected',
        'No external aids or devices allowed during performance',
        'Teams should be prepared for both English and regional songs'
      ],
      coordinators: [
        { name: 'Lipiga V A', phone: '+918667314300' },
        { name: 'Praveena P', phone: '+916380677879' }
      ],
      registrationLink: 'https://forms.gle/EMoNzn536BHD94126'
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'rules', 'events', 'contact']
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      let current = 'home'
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            current = section
          }
        }
      })
      setCurrentSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openEventModal = (eventKey) => {
    setSelectedEvent(eventKey)
  }

  const closeEventModal = () => {
    setSelectedEvent(null)
  }

  return (
    <div className="app">
      <ParticleEffect />
      
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={avengersVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-left">
            <img src={kecLogo} alt="KEC Logo" className="logo-img" />
          </div>
          <nav className="nav-center">
            <button 
              className={`nav-btn ${currentSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              className={`nav-btn ${currentSection === 'rules' ? 'active' : ''}`}
              onClick={() => scrollToSection('rules')}
            >
              Rules
            </button>
            <button 
              className={`nav-btn ${currentSection === 'events' ? 'active' : ''}`}
              onClick={() => scrollToSection('events')}
            >
              Events
            </button>
            <button 
              className={`nav-btn ${currentSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </nav>
          <div className="logo-right">
            <img src={itLogo} alt="IT Logo" className="logo-img" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Home Section */}
        <section id="home" className="section home-section">
          <div className="hero-content">
            <h1 className="main-title">
              <span className="college-name">KONGU ENGINEERING COLLEGE</span>
              <span className="college-subtitle">(Autonomous)</span>
              <span className="college-location">Perundurai, Erode</span>
            </h1>
            <div className="event-title">
              <h2>Department of Information Technology Presents</h2>
            </div>
            <div className="signin-logo-container">
              <img src={signinLogo} alt="SIGNIN 2K25 Logo" className="signin-logo-img" />
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section id="rules" className="section rules-section">
          <div className="rules-container">
            <h2 className="section-title">Event Rules & Guidelines</h2>
            <div className="rules-scroll">
              <ul className="rules-list">
                <li>Ensure timely presence at the designated venue.</li>
                <li>Strictly no malpractices during any events.</li>
                <li>Participation in at least one non-technical event is mandatory to receive certificates for technical events.</li>
                <li>Adherence to the specific rules of each event is compulsory.</li>
                <li>Mr. SIGNIN and Ms. SIGNIN titles will be awarded based on total scores from various events.</li>
                <li>An in-charge will be assigned for maintaining it on the event day. Ensure to register your name with them upon arrival.</li>
                <li>Maintain decorum and discipline throughout the event.</li>
                <li>Respect event coordinators and fellow participants.</li>
                <li>Failure to follow the rules may result in disqualification.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="section events-section">
          <div className="events-container">
            <h2 className="section-title">Events</h2>
            
            {/* Tech Events */}
            <div className="events-category">
              <h3 className="category-title">Tech Events</h3>
              <div className="events-grid">
                <div className="event-card">
                  <div className="event-image">
                    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop&auto=format&q=80" alt="Stark Mind Challenge" />
                  </div>
                  <div className="event-info">
                    <h4>Stark Mind Challenge</h4>
                    <p>Unleash your genius intellect and present revolutionary ideas</p>
                    <button className="event-details-btn" onClick={() => openEventModal('stark-mind')}>
                      Event Details
                    </button>
                  </div>
                </div>
                
                <div className="event-card">
                  <div className="event-image">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop" alt="Code Infinity War" />
                  </div>
                  <div className="event-info">
                    <h4>Code Infinity War</h4>
                    <p>Battle through mysterious coding challenges across the multiverse</p>
                    <button className="event-details-btn" onClick={() => openEventModal('code-infinity')}>
                      Event Details
                    </button>
                  </div>
                </div>
                
                <div className="event-card">
                  <div className="event-image">
                    <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop&auto=format&q=80" alt="Shield Design Protocol" />
                  </div>
                  <div className="event-info">
                    <h4>Shield Design Protocol</h4>
                    <p>Create stunning visuals worthy of the greatest heroes</p>
                    <button className="event-details-btn" onClick={() => openEventModal('shield-design')}>
                      Event Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Tech Events */}
            <div className="events-category">
              <h3 className="category-title">Non-Tech Events</h3>
              <div className="events-grid">
                <div className="event-card">
                  <div className="event-image">
                    <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop&auto=format&q=80" alt="Thor's Debate Arena" />
                  </div>
                  <div className="event-info">
                    <h4>Thor's Debate Arena</h4>
                    <p>Wield the power of words like Mjolnir in epic debates</p>
                    <button className="event-details-btn" onClick={() => openEventModal('thor-debate')}>
                      Event Details
                    </button>
                  </div>
                </div>
                
                <div className="event-card">
                  <div className="event-image">
                    <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&auto=format&q=80" alt="Avengers Melody Quest" />
                  </div>
                  <div className="event-info">
                    <h4>Avengers Melody Quest</h4>
                    <p>Channel the harmonious power of the Avengers through music</p>
                    <button className="event-details-btn" onClick={() => openEventModal('hulk-drama')}>
                      Event Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Now Empty or can be removed */}
        <section id="contact" className="section contact-section">
          <div className="contact-content">
            <div className="signin-ready-container">
              <h2 className="signin-ready-title">Get Ready for SIGNIN 2K25</h2>
              <div className="signin-ready-content">
                <p className="signin-ready-text">
                  Join us for an exciting showcase of talent and innovation!
                </p>
                <div className="signin-ready-effects">
                  <div className="pulse-ring"></div>
                  <div className="pulse-ring delay-1"></div>
                  <div className="pulse-ring delay-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-title">About SIGNIN 2K25</h3>
            <p className="footer-description">
              SIGNIN 2K25 is an intra-department event conducted by the Department of Information Technology 
              every year to enable students to showcase their skills and talents.
            </p>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-title">For queries contact:</h3>
            <div className="footer-contact-details">
              <div className="coordinator-item footer-coordinator">
                <div className="coordinator-name">Mithra S</div>
                <a href="tel:7010437916" className="coordinator-phone">7010437916</a>
              </div>
              <div className="coordinator-item footer-coordinator">
                <div className="coordinator-name">Nisar A</div>
                <a href="tel:+919787795213" className="coordinator-phone">+919787795213</a>
              </div>
              <div className="coordinator-item footer-coordinator">
                <div className="coordinator-name">Kaviya S</div>
                <a href="tel:+919360338092" className="coordinator-phone">+919360338092</a>
              </div>
            </div>
          </div>
          
          <div className="footer-developer">
            <p className="footer-developed">Developed by MohanRaja</p>
          </div>
        </div>
      </footer>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={closeEventModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{eventDetails[selectedEvent].title}</h2>
              <button className="modal-close" onClick={closeEventModal}>&times;</button>
            </div>
            <div className="modal-body">
              <p className="event-description">{eventDetails[selectedEvent].description}</p>
              <div className="event-rules">
                <h3>Event Rules:</h3>
                <ul>
                  {eventDetails[selectedEvent].rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>
              
              {eventDetails[selectedEvent].coordinators && (
                <div className="event-coordinators">
                  <h3>Event Coordinators:</h3>
                  <div className="coordinators-list">
                    {eventDetails[selectedEvent].coordinators.map((coordinator, index) => (
                      <div key={index} className="coordinator-item">
                        <span className="coordinator-name">{coordinator.name}</span>
                        <a href={`tel:${coordinator.phone}`} className="coordinator-phone">
                          {coordinator.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {eventDetails[selectedEvent].registrationLink && (
                <div className="event-registration">
                  <a 
                    href={eventDetails[selectedEvent].registrationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="register-btn"
                  >
                    Register Now
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
