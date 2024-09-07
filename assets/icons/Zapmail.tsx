type TSVGPROP = {
  fill?: string;
  width?: number;
  height?: number;
};

const Zapmail = ({ width = 171, height = 44, fill = '#131213' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 171 44'
      fill='none'
    >
      <path
        d='M11.6471 9.194C7.64706 9.194 4.84106 11.189 4.51506 15.844L3.86506 25.155C3.53906 29.811 6.06506 31.805 10.0651 31.805H23.4001C27.4001 31.805 30.2061 29.811 30.5321 25.155L31.1821 15.845'
        stroke={fill}
        stroke-width='3.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M24.707 15.727L21.119 15.822L24.715 6.825L14.894 17.693L18.047 18.307L14.65 27.144L24.707 15.727Z'
        fill={fill}
      />
      <path
        d='M44.0001 34.5V31.1L55.6281 13.182H44.0001V9.408H60.7281V12.774L49.1351 30.726H60.7281V34.5H44.0001ZM67.9141 34.704C66.5541 34.704 65.4441 34.296 64.5821 33.48C63.7211 32.664 63.2901 31.542 63.2901 30.114V28.584C63.2901 27.179 63.7661 26.034 64.7181 25.15C65.6931 24.266 67.1781 23.824 69.1721 23.824H74.3741V22.226C74.3741 21.591 74.2611 21.059 74.0341 20.628C73.8071 20.198 73.3991 19.88 72.8101 19.676C72.2201 19.449 71.3251 19.336 70.1241 19.336H64.6161V16.888C65.4551 16.661 66.4411 16.468 67.5741 16.31C68.7071 16.129 70.0561 16.038 71.6201 16.038C73.1161 16.015 74.3851 16.197 75.4281 16.582C76.4711 16.945 77.2531 17.557 77.7741 18.418C78.3181 19.279 78.5901 20.458 78.5901 21.954V34.5H75.2921L74.5781 32.528C74.4191 32.664 74.1361 32.845 73.7281 33.072C73.3201 33.299 72.8101 33.548 72.1981 33.82C71.5861 34.07 70.9061 34.285 70.1581 34.466C69.4331 34.625 68.6851 34.704 67.9141 34.704ZM69.9541 31.746C70.2491 31.746 70.5771 31.712 70.9401 31.644L72.0961 31.372C72.4811 31.259 72.8331 31.157 73.1501 31.066C73.4901 30.953 73.7621 30.851 73.9661 30.76C74.1035 30.707 74.2396 30.6503 74.3741 30.59V25.83L70.4301 26.034C69.3871 26.124 68.6281 26.397 68.1521 26.85C67.6991 27.303 67.4721 27.904 67.4721 28.652V29.4C67.4721 29.967 67.5851 30.431 67.8121 30.794C68.0621 31.134 68.3671 31.372 68.7301 31.508C69.1151 31.644 69.5231 31.723 69.9541 31.746ZM82.7671 42.558V16.276H86.2691L86.9831 18.078C87.4131 17.738 87.9131 17.409 88.4791 17.092C89.0586 16.7694 89.6751 16.5183 90.3151 16.344C90.9757 16.1395 91.6635 16.0363 92.3551 16.038C93.5111 16.038 94.4971 16.265 95.3131 16.718C96.1526 17.1721 96.8566 17.8408 97.3531 18.656C97.8741 19.472 98.2481 20.458 98.4751 21.614C98.7251 22.747 98.8491 24.005 98.8491 25.388C98.8491 27.383 98.6341 29.083 98.2031 30.488C97.7951 31.871 97.1151 32.925 96.1631 33.65C95.2331 34.375 93.9641 34.738 92.3551 34.738C91.4481 34.738 90.5191 34.613 89.5671 34.364C88.6371 34.114 87.7771 33.786 86.9831 33.378V42.558H82.7671ZM91.0291 31.27C91.6861 31.27 92.2871 31.1 92.8311 30.76C93.3751 30.397 93.8051 29.797 94.1231 28.958C94.4631 28.119 94.6331 26.929 94.6331 25.388C94.6331 23.915 94.4741 22.736 94.1571 21.852C93.8401 20.968 93.4091 20.345 92.8651 19.982C92.3431 19.619 91.7431 19.438 91.0631 19.438C90.2241 19.438 89.4651 19.574 88.7851 19.846C88.1051 20.096 87.5051 20.356 86.9831 20.628V30.148C87.5939 30.497 88.2446 30.771 88.9211 30.964C89.6057 31.1654 90.3154 31.2684 91.0291 31.27ZM102.589 34.5V16.276H106.023L106.805 18.18C107.644 17.59 108.562 17.08 109.559 16.65C110.579 16.197 111.78 15.97 113.163 15.97C114.296 15.97 115.248 16.22 116.019 16.718C116.812 17.194 117.402 17.818 117.787 18.588C118.375 18.1376 119 17.7395 119.657 17.398C120.417 16.9848 121.214 16.6433 122.037 16.378C122.838 16.1122 123.675 15.9745 124.519 15.97C125.924 15.97 127.046 16.253 127.885 16.82C128.746 17.364 129.358 18.135 129.721 19.132C130.084 20.107 130.265 21.24 130.265 22.532V34.5H126.049V22.872C126.049 22.215 125.924 21.659 125.675 21.206C125.433 20.7601 125.067 20.3939 124.621 20.152C124.19 19.902 123.658 19.778 123.023 19.778C122.207 19.778 121.38 19.937 120.541 20.254C119.725 20.571 118.977 20.957 118.297 21.41C118.388 21.637 118.444 21.886 118.467 22.158C118.512 22.43 118.535 22.702 118.535 22.974V34.5H114.319V22.872C114.319 22.215 114.194 21.659 113.945 21.206C113.703 20.7601 113.337 20.3939 112.891 20.152C112.46 19.902 111.928 19.778 111.293 19.778C110.704 19.778 110.148 19.835 109.627 19.948C109.132 20.0598 108.653 20.231 108.199 20.458C107.746 20.685 107.281 20.957 106.805 21.274V34.5H102.589ZM138.205 34.704C136.845 34.704 135.734 34.296 134.873 33.48C134.012 32.664 133.581 31.542 133.581 30.114V28.584C133.581 27.179 134.057 26.034 135.009 25.15C135.984 24.266 137.468 23.824 139.463 23.824H144.665V22.226C144.665 21.591 144.552 21.059 144.325 20.628C144.098 20.198 143.69 19.88 143.101 19.676C142.512 19.449 141.616 19.336 140.415 19.336H134.907V16.888C135.746 16.661 136.732 16.468 137.865 16.31C138.998 16.129 140.347 16.038 141.911 16.038C143.407 16.015 144.676 16.197 145.719 16.582C146.762 16.945 147.544 17.557 148.065 18.418C148.609 19.279 148.881 20.458 148.881 21.954V34.5H145.583L144.869 32.528C144.71 32.664 144.427 32.845 144.019 33.072C143.611 33.299 143.101 33.548 142.489 33.82C141.877 34.07 141.197 34.285 140.449 34.466C139.724 34.625 138.976 34.704 138.205 34.704ZM140.245 31.746C140.54 31.746 140.868 31.712 141.231 31.644L142.387 31.372C142.772 31.259 143.124 31.157 143.441 31.066C143.781 30.953 144.053 30.851 144.257 30.76C144.395 30.7071 144.531 30.6504 144.665 30.59V25.83L140.721 26.034C139.678 26.124 138.919 26.397 138.443 26.85C137.99 27.303 137.763 27.904 137.763 28.652V29.4C137.763 29.967 137.876 30.431 138.103 30.794C138.352 31.134 138.658 31.372 139.021 31.508C139.415 31.6458 139.828 31.726 140.245 31.746ZM153.602 13.386C153.171 13.386 152.956 13.182 152.956 12.774V9.68C152.956 9.227 153.171 9 153.602 9H156.798C157.002 9 157.149 9.068 157.24 9.204C157.353 9.34 157.41 9.499 157.41 9.68V12.774C157.41 13.182 157.206 13.386 156.798 13.386H153.602ZM153.058 34.5V16.276H157.274V34.5H153.058ZM166.997 34.568C165.796 34.568 164.787 34.364 163.971 33.956C163.178 33.548 162.577 32.913 162.169 32.052C161.784 31.191 161.591 30.046 161.591 28.618V8.558H165.807V28.04C165.807 28.856 165.886 29.49 166.045 29.944C166.226 30.397 166.476 30.726 166.793 30.93C167.11 31.111 167.496 31.236 167.949 31.304L169.479 31.508V34.568H166.997Z'
        fill={fill}
      />
    </svg>
  );
};

export default Zapmail;
