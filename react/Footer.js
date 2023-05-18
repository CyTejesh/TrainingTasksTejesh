import React from 'react'

import './footer.css'

const Footer = ({ shopLinks, aboutLinks, helpLinks }) => {
  const footerContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px'
  }

  const footerColumn = {
    marginRight : "250px"
  }

  const listItemStyle = {
    listStyle: 'none',
    marginBottom: '10px',
  }
  const items = {
    textDecoration : 'none',
    color : 'black'
  }
  const heading = {
    marginLeft : '40px'
  }

  return (
    <div>
    <div className="footer-container" style={footerContainerStyle}>
      <div className="footer-column" style={footerColumn}>
        <h2  style={heading}>Shop</h2>
        <ul>
          {shopLinks?.map(link => (
            <li key={link.url} style={listItemStyle}>
              <a href={link.url} style={items}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-column" style={footerColumn}>
        <h2 style={heading}>About</h2>
        <ul>
          {aboutLinks?.map(link => (
            <li key={link.url} style={listItemStyle}>
              <a href={link.url} style={items}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h2 style={heading}>Help</h2>
        <ul>
          {helpLinks?.map(link => (
            <li key={link.url} style={listItemStyle}>
              <a href={link.url} style={items}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {/* <div>
      <div>
        <h3>
          Sign Up to receive project Antelope Newsletter
        </h3>
      </div>
    </div> */}
    </div>
  )
}

Footer.schema = {
  title: 'Footer',
  type: 'object',
  properties: {
    shopLinks: {
      title: 'Shop',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          text: {
            title: 'Link Text',
            type: 'string'
          },
          url: {
            title: 'Link URL',
            type: 'string'
          }
        }
      },
      default: [
        {
          text: 'Our Artists',
          url: '#'
        },
        {
          text: 'Jewelry',
          url: '#'
        },
        {
          text: 'Fashion',
          url: '#'
        },
        {
          text: 'Music',
          url: '#'
        },
        {
          text: 'Literature',
          url: '#'
        },
        {
          text: 'For Your Home',
          url: '#'
        }
      ]
    },
    aboutLinks: {
      title: 'About',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          text: {
            title: 'Link Text',
            type: 'string'
          },
          url: {
            title: 'Link URL',
            type: 'string'
          }
        }
      },
      default: [
        {
          text: 'Our Story',
          url: '#'
        },
        {
          text: 'Press',
          url: '#'
        },
        {
          text: 'Contact Us',
          url: '#'
        }
      ]
    },
    helpLinks: {
      title: 'Help',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          text: {
            title: 'Link Text',
            type: 'string'
          },
          url: {
            title: 'Link URL',
            type: 'string'
          }
        }
      },
      default: [
        {
          text: 'FAQ',
          url: '#'
        },
        {
          text: 'Returns & Exchanges',
          url: '#'
        },
        {
          text: 'Shipping & Delivery',
          url: '#'
        }
      ]
    }
  }
}

export default Footer
