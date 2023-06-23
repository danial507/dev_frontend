import { MobileNav, Button } from '@material-tailwind/react'
import NavList from './NavList'
export default function NavMobile({ open }) {
  return (
    <MobileNav open={open}>
      <div className="container mx-auto">
        <NavList />
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Fro Candidates</span>
        </Button>
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Fro Employers</span>
        </Button>
      </div>
    </MobileNav>
  )
}
