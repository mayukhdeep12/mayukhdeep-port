import useStore from '@/api/store'
import ContactsLink from './ContactsLink'
import { Icon } from '@/assets'

interface ContactSocial {
  title: string
  href: string
  icon: Icon
}

const contacts: ContactSocial[] = [
  {
    title: 'Resume',
    href: `https://drive.google.com/file/d/1ofcy9woBtN57rwg7Dsl3KkX64Y-W_Ozj/view?usp=sharing`,
    icon: 'Email',
  },
  {
    title: 'Email',
    href: `mailto:${import.meta.env.VITE_EMAIL}`,
    icon: 'Email',
  },
  {
    title: 'LinkedIn',
    href: `https://linkedin.com/in/${import.meta.env.VITE_LINKEDIN_HANDLE}`,
    icon: 'LinkedIn',
  },
  {
    title: 'GitHub',
    href: `https://github.com/${import.meta.env.VITE_GITHUB_HANDLE}`,
    icon: 'GitHub',
  },
  {
    title: 'X / Twitter',
    href: `https://twitter.com/${import.meta.env.VITE_TWITTER_HANDLE}`,
    icon: 'X',
  },
]

function Contacts() {
  const isLoading = useStore(state => state.isLoading)
  const isContacts = useStore(state => state.isContacts)

  return (
    <div className={`contacts ${isContacts && !isLoading ? 'open' : ''}`} style={{ zIndex: isContacts && !isLoading ? 3 : 2 }}>
      <div className='contacts-socials'>
        {contacts.map((link, index) => (
          <ContactsLink
            key={link.title}
            open={isContacts && !isLoading}
            title={link.title}
            href={link.href}
            icon={link.icon}
            delay={(index + 1) * 0.05 + 0.4}
            duration={0.7 + index * 0.1}
          />
        ))}
      </div>
    </div>
  )
}

export default Contacts