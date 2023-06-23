import LiveIcon from '../elements/LiveIcon'

function NavList() {
  return (
    <div className="hidden lg:block">
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-[2.3rem]">
        <li>
          <a href="#" className="flex items-center">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            Courses
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            Jobs
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            Events
          </a>
        </li>
        <li className="relative">
          <a href="#" className="flex items-center">
            <span className="absolute bottom-[20px]">
              <LiveIcon />
            </span>
            Live
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavList
