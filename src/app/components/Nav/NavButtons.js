import { Tooltip } from '@material-tailwind/react'
export default function NavButtons({ setTheme }) {
  return (
    <div className="flex gap-2">
      <button
        className="hidden lg:inline-block bg-primary dark:bg-[#F6F6F6] rounded-xl text-white px-4 py-2 lg:h-[40px] rounded"
        id="theme-toggle"
      >
        <Tooltip content="Dark Mode" placement="top">
          <svg
            id="theme-toggle-dark-icon"
            className="hidden w-5 h-5 fill-white dark:fill-[#303B51]"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setTheme('dark')}
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        </Tooltip>
        <Tooltip content="Light Mode" placement="top">
          <svg
            id="theme-toggle-light-icon"
            className="hidden w-5 h-5 fill-white dark:fill-[#303B51]"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setTheme('light')}
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Tooltip>
      </button>
      <button className="hidden lg:inline-block bg-primary  dark:bg-[#F6F6F6] rounded-xl text-[#F6F6F6] dark:text-[#303B51] px-4 py-2 lg:h-[40px] rounded">
        <span>For Candidates</span>
      </button>
      <button className="hidden lg:flex relative gap-[2rem] items-center rounded-xl lg:h-[40px] bg-primary  dark:bg-[#F6F6F6] text-[#F6F6F6] dark:text-[#303B51] px-4 py-2 rounded">
        <span>
          For Employers{' '}
          <span className="absolute h-[19px] w-[1px] right-[2.5rem] top-0">
            <svg
              width={1}
              height={40}
              viewBox="0 0 1 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="-2.18557e-08"
                x2="0.500002"
                y2={40}
                className="stroke-[#F6F6F6] dark:stroke-[#303B51]"
              />
            </svg>
          </span>
        </span>

        <span>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="8.5"
              y1="-2.18557e-08"
              x2="8.5"
              y2={16}
              className="stroke-[#F6F6F6] dark:stroke-[#303B51]"
            />
            <line
              x1={16}
              y1="8.5"
              y2="8.5"
              className="stroke-[#F6F6F6] dark:stroke-[#303B51]"
            />
          </svg>
        </span>
      </button>
    </div>
  )
}
