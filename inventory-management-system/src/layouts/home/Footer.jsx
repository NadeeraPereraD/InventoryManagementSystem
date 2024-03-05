import React from 'react'

export default function Footer() {
  return (
    <div>
        <small style={{
            backgroundColor: 'teal', 
            position:'fixed', 
            width: '100%', 
            bottom: 0,
            height: '5%',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontWeight: '800',
            
            }}>
            © Copywrite {new Date().getFullYear} Nadeera Perera
        </small>
    </div>
  )
}
