import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const HeroSection: FC = () => {
  return (
    <main
      className="py-10 md:py-20"
      style={{
        background:
          "linear-gradient(101.5deg, rgba(254, 194, 194, 0.12) 4.41%, rgba(252, 222, 158, 0.12) 111.54%)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-18">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start space-y-8 lg:space-y-10">
            {/* Top badge */}
            <div className="relative inline-flex items-center gap-2.5 rounded-full border border-secondary p-2 text-sm font-medium shadow-sm backdrop-blur-sm bg-white">
              <div className="absolute right-0 -top-4.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M2.15525 15.7075L2.94214 11.1144L-2.04742e-05 7.50054L4.59313 8.28743L8.20698 5.34527L7.42008 9.93842L10.3622 13.5523L5.7691 12.7654L2.15525 15.7075ZM4.2123 4.74939L4.59166 2.63928L3.22447 0.987845L5.33458 1.36721L6.98601 1.43349e-05L6.60665 2.11012L7.97384 3.76156L5.86374 3.38219L4.2123 4.74939ZM11.3709 11.8252L11.8062 9.15212L10.1136 7.03781L12.7867 7.47311L14.901 5.78057L14.4657 8.45367L16.1583 10.568L13.4852 10.1327L11.3709 11.8252Z"
                    fill="#E56E1B"
                  />
                </svg>
              </div>
              <span className="bg-[#299FB0] p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_306_5539)">
                    <path
                      d="M6.53 8.09798L6.67 8.08598C6.72074 8.0806 6.76927 8.06235 6.811 8.03298L6.81 8.03398C6.944 8.49598 7.108 8.98198 7.313 9.49098C7.576 10.157 7.835 10.704 8.125 11.232L8.085 11.152C8.061 11.516 8.032 11.89 7.994 12.252C7.97699 12.4655 7.93366 12.6761 7.865 12.879L7.87 12.861C7.858 12.866 7.841 14.941 7.841 14.941C7.84172 15.5847 8.05885 16.2095 8.45749 16.715C8.85614 17.2205 9.41314 17.5772 10.039 17.728L10.059 17.732C10.0863 17.6595 10.1352 17.597 10.199 17.5531C10.2628 17.5091 10.3385 17.4857 10.416 17.486H10.99C11.0667 17.487 11.1413 17.5106 11.2046 17.5538C11.2679 17.597 11.3171 17.658 11.346 17.729L11.347 17.732C11.9781 17.5856 12.5414 17.2306 12.9458 16.7246C13.3503 16.2185 13.5723 15.5908 13.576 14.943C13.576 14.943 13.541 12.876 13.523 12.862C13.4624 12.6689 13.4216 12.4703 13.401 12.269L13.4 12.254C13.365 11.89 13.342 11.525 13.309 11.154C13.556 10.708 13.815 10.162 14.043 9.59898L14.081 9.49298C14.286 8.98398 14.445 8.49898 14.584 8.03598C14.6251 8.06504 14.6729 8.08327 14.723 8.08898H14.724L14.865 8.10098C15.035 8.11898 15.185 7.97898 15.199 7.76198L15.351 5.83098V5.82898C15.3509 5.75128 15.3225 5.67626 15.2712 5.61793C15.2199 5.5596 15.1491 5.52194 15.072 5.51198H15.053C15.1875 4.50651 15.105 3.48388 14.811 2.51298L14.824 2.56398C14.5419 1.9377 14.113 1.38871 13.5735 0.963584C13.034 0.538462 12.3999 0.249762 11.725 0.121981L11.699 0.117981C11.3717 0.0531012 11.0395 0.015638 10.706 0.00598145H10.685C10.336 0.0122911 9.98847 0.0518027 9.647 0.123981L9.683 0.117981C9.00863 0.243574 8.37409 0.528681 7.83237 0.949497C7.29065 1.37031 6.85747 1.91462 6.569 2.53698L6.558 2.56398C6.27019 3.5314 6.19346 4.54935 6.333 5.54898L6.329 5.51198C6.25173 5.52034 6.18025 5.55689 6.12823 5.61463C6.0762 5.67237 6.04728 5.74726 6.047 5.82498V5.83198L6.199 7.76298C6.213 7.98498 6.365 8.11898 6.529 8.10098L6.53 8.09798Z"
                      fill="white"
                    />
                    <path
                      d="M21.416 20.878C21.346 17.838 21.042 17.15 20.878 16.684C20.813 16.497 20.76 15.233 18.672 14.413C17.392 13.909 15.74 13.899 14.342 13.308V14.952C14.3409 15.7949 14.0465 16.6112 13.5094 17.2608C12.9722 17.9103 12.2257 18.3527 11.398 18.512L11.375 18.516C11.36 18.6047 11.3143 18.6853 11.246 18.7438C11.1776 18.8023 11.0909 18.8349 11.001 18.836H10.983V20.076C10.983 20.6579 11.2141 21.216 11.6256 21.6274C12.037 22.0389 12.5951 22.27 13.177 22.27C13.7589 22.27 14.3169 22.0389 14.7284 21.6274C15.1398 21.216 15.371 20.6579 15.371 20.076V19.21C15.069 19.1657 14.7937 19.0123 14.5971 18.7787C14.4006 18.5452 14.2965 18.2477 14.3045 17.9426C14.3125 17.6374 14.432 17.3458 14.6405 17.1228C14.8489 16.8999 15.1319 16.7611 15.4358 16.7326C15.7397 16.7042 16.0435 16.7882 16.2897 16.9686C16.5359 17.149 16.7075 17.4134 16.7719 17.7118C16.8364 18.0101 16.7892 18.3218 16.6394 18.5877C16.4896 18.8537 16.2475 19.0555 15.959 19.155L15.95 19.158V20.123C15.95 20.8587 15.6577 21.5643 15.1375 22.0845C14.6173 22.6048 13.9117 22.897 13.176 22.897C12.4403 22.897 11.7347 22.6048 11.2145 22.0845C10.6942 21.5643 10.402 20.8587 10.402 20.123V20.073V20.075V18.824C10.3163 18.8184 10.235 18.7838 10.1715 18.7261C10.1079 18.6683 10.0658 18.5908 10.052 18.506V18.504C9.22351 18.346 8.47577 17.9049 7.93685 17.2561C7.39793 16.6074 7.10137 15.7914 7.09797 14.948V13.291C5.69397 13.894 4.03197 13.906 2.74497 14.411C0.650968 15.23 0.602969 16.491 0.538969 16.681C0.378969 17.149 0.0709685 17.834 0.00096852 20.876C-0.0110315 21.276 0.000968575 21.889 1.20697 22.425C3.83297 23.455 7.21597 23.775 10.551 24.005H10.871C14.213 23.777 17.591 23.458 20.215 22.425C21.416 21.892 21.427 21.282 21.416 20.878ZM6.73497 19.638H5.48897V20.889H4.59897V19.642H3.35297V18.752H4.59897V17.506H5.48897V18.752H6.73497V19.638Z"
                      fill="white"
                    />
                    <path
                      d="M16.225 17.965C16.2249 17.7866 16.1539 17.6145 16.0276 17.4884C15.9014 17.3622 15.7302 17.2914 15.5518 17.2915C15.3733 17.2916 15.2022 17.3625 15.0761 17.4887C14.9499 17.6149 14.879 17.7861 14.879 17.9645C14.879 18.143 14.9499 18.3141 15.0761 18.4403C15.2022 18.5665 15.3733 18.6374 15.5518 18.6375C15.7302 18.6376 15.9014 18.5668 16.0276 18.4407C16.1539 18.3145 16.2249 18.1435 16.225 17.965Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_306_5539">
                      <rect width="21" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>
                Top-Notch <span className="text-accent">Endocrinology</span>,
                Just for you
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-bold leading-tight tracking-tight text-gray-900 text-[24px] md:text-[32px]">
              Stay Ahead of <span className="text-accent">Hormonal Health</span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-xl text-black">
              At Omega Hospital, our endocrinology experts specialize in early
              detection, prevention, and advanced treatment of hormonal
              disorders, helping you lead a healthier, worry-free life.
            </p>

            {/* Buttons */}
            <div className="flex md:justify-start justify-center flex-wrap gap-4 pt-4">
              <Link
                href=""
                className="
      inline-flex items-center justify-center
      min-h-14
      rounded-[10px] bg-secondary px-20 md:px-8 text-[16px] font-semibold leading-none
      text-white shadow-lg transition-all hover:scale-105
    "
              >
                Get In Touch
              </Link>

              <Link
                href=""
                className="
      relative overflow-hidden group
      inline-flex items-center justify-center gap-2
      min-h-14
      rounded-[10px]
      border-2 border-accent px-8 text-[16px] font-semibold leading-none
      text-accent
    "
              >
                {/* Hover blocks */}
                <span className="absolute inset-0 z-0 flex">
                  <span className="w-1/4 bg-accent -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-linear" />
                  <span className="w-1/4 bg-accent -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-linear delay-150" />
                  <span className="w-1/4 bg-accent -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-linear delay-300" />
                  <span className="w-1/4 bg-accent -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-linear delay-450" />
                </span>

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  Explore Our Services
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="24"
                      viewBox="0 0 30 24"
                      fill="none"
                      className="stroke-current"
                    >
                      <path d="M9 6L15 12L9 18" />
                      <path d="M15 6L21 12L15 18" />
                    </svg>
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="relative w-full md:h-130.25 h-86.5">
            {/* You can later replace this with your actual image path */}
            <Image
              src="/images/digestive.webp"
              alt="Endocrine system illustration with human body and highlighted glands"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
