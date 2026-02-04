import About from "@/components/helpers/About";
import HorizontalInfoSection from "@/components/helpers/HorizontalInfoSection";
import InfoRowCards from "@/components/helpers/InfoRowCards";
import WhyChooseOmega from "@/components/helpers/WhyChooseOmega";
import AdvancedDiabetesHero from "@/components/layout/obesity/AdvancedDiabetesHero";

const page = () => {
  return (
    <div>
      <div>
        <AdvancedDiabetesHero
          title="Protect Your Bones, Preserve Your Independence"
          description="Through early detection, lifestyle guidance, and targeted therapies, we help you build strong bones and preserve your mobility throughout your lifetime."
          leftWave="/images/diabetes/home-wave.webp"
          rightImage="/images/cholesterol/home-cholesterol.webp"
          buttonText="Get In Touch"
          width="72%"
        />
        <About
          breadcrumb="High Blood Cholesterol"
          image="/images/cholesterol/about-image.webp"
          title="High Blood Cholesterol: Managing Heart Health Effectively"
          description="High blood cholesterol is a common but serious condition where excess cholesterol circulates in the blood, leading to plaque buildup in arteries. This increases the risk of heart attack, stroke, and other cardiovascular problems. Management requires a combination of medical treatment, healthy lifestyle changes, and continuous monitoring. At Omega, our endocrinology and cardiology teams work together to provide integrated care that keeps cholesterol under control and protects long-term heart health."
          bullets={[
            "Early screening helps detect high cholesterol before symptoms appear.",
            "Blood lipid tests allow accurate assessment of heart disease risk.",
            "Dietary changes with reduced saturated fats and trans fats improve cholesterol levels.",
            "Regular physical activity supports healthy HDL (“good cholesterol”) and lowers LDL (“bad cholesterol”).",
            "Medications like statins, when prescribed, effectively reduce cholesterol and prevent complications.",
            "Continuous follow-up ensures treatment goals are achieved and maintained.",
          ]}
        />

        <HorizontalInfoSection
          heading="Understanding Cholesterol & Its Impact on Health"
          paragraphs={[
            "Cholesterol is a fatty substance essential for body functions, but excess levels can silently damage blood vessels. High cholesterol rarely causes symptoms until major cardiovascular problems occur. Early detection and management are critical to prevent complications.",
          ]}
          iconBg="#F8E7DB"
          rowBg="#FAF4F0"
          rows={[
            {
              title: "Risk Factors",
              description:
                "Unhealthy diet, obesity, diabetes, smoking, family history of heart disease, and lack of exercise increase the risk of high cholesterol.",
              icon: (
                <>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="60"
                      height="60"
                      rx="12"
                      fill="url(#pattern0_754_1366)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_754_1366"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_754_1366"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_754_1366"
                        width="96"
                        height="96"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </>
              ),
            },
            {
              title: "Common Signs",
              description:
                "Often called a “silent risk,” high cholesterol usually shows no symptoms. In advanced cases, chest pain, angina, or signs of heart disease may appear.",
              icon: (
                <>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="60"
                      height="60"
                      rx="12"
                      fill="url(#pattern0_754_1370)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_754_1370"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_754_1370"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_754_1370"
                        width="96"
                        height="96"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAExklEQVR4nO2dS2wcRRCGG1DEG6EEYk/VbAwivG+YiPdLQuLC1SAUBDcrsrdr7EQhR4cblxw4cgMuPE4gLkjcEOIQHIUDQsKX2N7u3kSBgCBOABGMatdE1sprr8c7U/OoT6rTzm5X1z/d01P9WGMURVEURVEURVEUpR/LszE6C68EwsmNjD9bmm5A3x9Q0hMIX/cWLnnC1U2Nr7HxQWl/K3fn+0GCv2aOcEVbwhBxCU4MGvyrIiQ4Ie13ZQiEk9sVgL8j7XdlCCqALEEFkCWoALIEFUCWoALIElQAWYIKIEtQAWQJKoAsQQXYnJbF2FP0lrd4PEw3Hq2qAIHiA1xH14SjnCA0RcBZeLI3U+kIP1uyjXuqIsDybLzfW/y8p44rLoEnhlVGWsdudISLGwcB/nYE7/5sd99WVgHaR0Zu5jveE1zuU8cWX2Ok8IRvbxUIZ/G8J0xWJ8x1ZRFg1ZhrWgm+4QjaW5Zl8biRwB2GBjfDQQPiLJ7yzeiZogsQuv38twOXZeFSOxm5y+SNJ/xku0FZu2O+2K7DIQcBOvPNBB86wn9T1Oljkye+GT2VytH1DzCCd85N3XmLtAD8HPMWjznCP9LWp1OejZ8zeeEsnNyJs+u6pSVeycB9bt4CcJkugVfZh+HUBU4OPdAbBsOOPjQMh3taxNd+JnokLwG4rE6Zw65HAvebrGkl+NiwHffd1nCF++BzU2OjWQngpmEPD40d4T9Z1CFQNJ65AGfeHLvBE/gsKuC7Qlzkod2C3X/9sASYnxzfxUNhT/BbVn57C4FjY/KgleDz3sKvmVWGOvaTI3h5pwLwb3gLC9n6ChfSDrFTwwufvIUPdjIa8gO1CPjSE55I8d0Ta9/N0De84i2+vzizLzJScL/nCL/JuDWsFs141MN5MFMEukM6nOifF6qSgefubXXOXGuKhp+Mbuokr7axjtOXxSz8xSOo80f33GrKMD+Q+rWeCmicPmmO3G3KBr+ee4unSxz407mmGLKA+8pOatfi2fIEHn7ZaQq9cJxJxm7nBJwn+FM8wNTPupNI7KupKi3Ce73FT+WDjb32VXum8bCpC64JLzoLPxQg8FffuGvH/OT4ru7mus60Zb6B51SKxWPrc061ZXk23p1llnKjrGv70Mhe6XrXWoCztHfE1J35/9PE2WdWtQsq7EPYwkKtHsJuGu7jV3vxwFPNhqElehF7zx+O7jBVQVMR0sk4gu/FA0rpzFn80SfxS6ZsaDpaekKm72riEpst8ISMTkkKUttJeYLvRCfldVkKyi1LaVl8QRdm4TqDC7lNXerSRNzYb4I2L3XPXICWxcfzzlKG0izOjQ9kLkBIRh8c/t2DlVie7pvRAyYPdIMGym3QYHj4VbktShZ/34kAIYmfNXnCG9NSOVvNTXofGZF8D49YBu9uTnmKnq7iNtUwNTpmJOjmfbYMvG7Uzgo9qgBkjypg+MCK3h3ztTisw+JF8cM6eh5gRxzBXNWPq3EEc1zXWp1NHQoiQG0JKoAsQQWQJagAsgQVQJagAsgSVABZggogS1ABZAkqgCxBBZDF6d9YybI03YBtnVFKuCJ6hk8V8TY+OIgInWua0WvS/laSxZl90VZ/5ql3vqIoiqIoiqIoimI24z8nCf7yydidTAAAAABJRU5ErkJggg=="
                      />
                    </defs>
                  </svg>
                </>
              ),
            },
            {
              title: "Lifestyle & Nutrition Impact",
              description:
                "A diet rich in fruits, vegetables, whole grains, and lean proteins lowers cholesterol. Avoiding fried foods, processed snacks, and sugary drinks is crucial. Regular exercise and weight control also help.",
              icon: (
                <>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="60"
                      height="60"
                      rx="12"
                      fill="url(#pattern0_754_1374)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_754_1374"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_754_1374"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_754_1374"
                        width="96"
                        height="96"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </>
              ),
            },
            {
              title: "Diagnosis & Treatment",
              description:
                "Blood lipid profile tests detect cholesterol levels. Treatment includes medications like statins, lifestyle modifications, and regular monitoring to keep arteries healthy.",
              icon: (
                <>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="60"
                      height="60"
                      rx="12"
                      fill="url(#pattern0_754_1378)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_754_1378"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_754_1378"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_754_1378"
                        width="96"
                        height="96"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEOklEQVR4nO2dz2tUVxTHb8WCFttqUzFzzjOxLtpFpRRcFClYBANiuxK6K3QX0Mw5TwNFqQuLdtGNLiwKFe3GSmt3tbsWAm4UrfUvMEade1/qD3AVdVNGbkhgMnlmZt7Me+f9OB/4wiwm955zP5O892be5BqjKIqiKIoyE46ud/Xap7YOu9OIH9vPId1n7nCTtXcd4Z+OsZlRrvg5TVl4eGB02HFtzIb4ZZI4hqkMF38hMJW83tqY71l63c1sfdN7/pVrCf/PfgFRNAs9X5kNN20RWXwbwgeW8dHgG4ObluGnVEJwc+D1Mj6yE/B+povfPGZWWcJ/03llwdG06vZjp1Izwz9NY14zWdEg3LWsEMI/LMMPvca1HXwzFeD/fCap2R/E2/qPKPgsrbq7aeRM0rEixq+kBPi5k47lGM+2Sfh2sNWuNDnBqdbJG4x7qyagwbh36YsQThkpAREFe6omIKJgT24FzF/RMp5whL93DMMNuYMw3OiqRsLj0+Nb3y6MAEf4W+nOggh/LYwAy3g3+Wkd3HGMf6eT+bETnmri3SIJuJdcAOYyvqeCCoDnEde2rxTHeFlgUS93rgueF16AZZzrNN6DQ8FaS/ijI3ia+sITPLUMp/2cnerytVdCQCsNwuC/gyNb04gf2/RAJQXkCRUgjAoQRgUIowKEUQHCqIAuaR4zqztdVK2UJ/TOW3HjqoBebmvp4+LsVW+nq4AuUQEqoFkaAbMcbGu9CerBoQA7/czjb4be7PKDldjYED6OG7eSAhzj90vGruM+I4QKYBUQiwowKiALVACrgNQEzB7c/GHcDbSO8Xbr2Jbwr7jnPTywcd3iWP5xPzft+loqJ2BZA9xjWr5godcBKqCpAlgF9CTATsBQ7JfpCC4tbQy/i3verfHtry+O5R/39QW+CRiqnIBXjs16FtQRFWBUQBaoAFYBsagAU14BSdDTUBXQVAGsAsQE3N8/ssESTCdNFAY748ZVAcKoAGFUgDAqQBgVIEypBdhJ2BwxjuchvpbKCej7AxkeXCp5HaAC+kAFmOILWPiHf4fzEF9L5QQUAasCZFEBwqgAYVSAMKUWYEPYYRlv5SIh7KicAL0O6AMVYFSAUwH9CfA31N7fP7IhD2m90betj7nSCigCVgXIogKEUQHCqABhVIAwpRDgGF6ktTGbTTm+9hIIKEdsoQQQTJdOAMF0YQQ4wp+lF8wNPhcKI2Dm69E1jgJKskWUzWF8L76nwgioApGoAMaTrZM36vi5qRiW4Yu2P1EnM5vcMR5pO0BdzHQrP2F8r5bhl6W/AXg4swL8R3jLDlKE11LbhJPzFcdwvb3/RoifZCZgXgLB1RycmTTzEZgyWeO3A7GEM/LNo2j89la9bo0yMCIa3mgJzzuCZxVc+DlLcC4XW6O78dobDcaPpN+7sRnF9+p7ll53RVEURVFMcl4CfsHKE5zo8okAAAAASUVORK5CYII="
                      />
                    </defs>
                  </svg>
                </>
              ),
            },
          ]}
        />

        <InfoRowCards
          background="#F8E7DB"
          cardBg="#FAF4F0"
          cards={[
            {
              title: "Comprehensive Cholesterol Management",
              description:
                "High blood cholesterol can be effectively controlled with timely diagnosis and personalized interventions. A structured plan reduces cardiovascular risk and improves overall quality of life.",
              icon: (
                <>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_756_1424)">
                      <path
                        d="M55.8895 13.1249H48.0257C44.8196 13.1184 41.6847 14.0707 39.0239 15.8596C36.3632 17.6485 34.2981 20.1921 33.0942 23.1637C32.854 22.5181 32.4754 21.9328 31.9851 21.449C31.37 20.8127 30.5824 20.3699 29.7192 20.1749C29.4722 20.1268 29.2205 20.1083 28.9692 20.1196C35.0977 15.6957 40.1939 9.99533 43.9064 3.41146L45.0389 1.39678L43.4067 0.478027L42.2714 2.49178C37.7613 10.511 31.1429 17.1433 23.1332 21.6702C16.9703 25.1656 11.6409 29.9591 7.51449 35.7187L0.174805 45.9937L1.70105 47.083L4.13855 43.6733C4.27346 43.8501 4.41971 44.018 4.57637 44.1758C5.19217 44.8122 5.98034 45.255 6.84418 45.4499C7.05183 45.4923 7.26318 45.514 7.47512 45.5146C7.79477 45.5229 8.11288 45.4674 8.41084 45.3514C8.70879 45.2353 8.98062 45.061 9.21043 44.8387C9.50274 44.5264 9.71217 44.1459 9.8196 43.7319C9.92703 43.3179 9.92903 42.8836 9.82543 42.4687C9.63131 41.6031 9.18885 40.813 8.5523 40.1952C8.17887 39.824 7.74803 39.5153 7.27637 39.2812L9.0398 36.8127C10.1866 35.2172 11.4338 33.6963 12.7739 32.2593C13.4584 32.6264 14.2237 32.8165 15.0004 32.8124C17.1032 32.8124 18.7504 31.5777 18.7504 29.9999C18.7344 29.5599 18.6057 29.1314 18.3767 28.7554C18.1477 28.3793 17.8261 28.0683 17.4426 27.8521C19.5117 26.1475 21.7243 24.6249 24.0557 23.3015C25.0073 22.7643 25.9354 22.1896 26.8476 21.5952C26.662 22.2786 26.6728 23.0005 26.8787 23.678C27.0847 24.3556 27.4775 24.9613 28.012 25.4258C28.6282 26.0627 29.4171 26.5056 30.2817 26.6999C30.4893 26.7423 30.7007 26.764 30.9126 26.7646C31.3416 26.767 31.7641 26.6605 32.1407 26.4552C31.9694 27.3856 31.8807 28.3292 31.8754 29.2752C31.8752 32.6273 30.944 35.9135 29.1857 38.7674C23.0249 44.0306 18.5707 51.0089 16.3907 58.813L18.1982 59.3118C20.9354 49.495 27.4182 41.1458 36.2507 36.0618C44.0089 31.6204 50.5383 25.3162 55.2492 17.7187L59.8598 10.2702L58.2661 9.28115L55.8895 13.1249ZM7.22574 41.5246C8.0348 42.3337 8.16324 43.243 7.88855 43.513C7.79151 43.5801 7.68031 43.624 7.56358 43.6412C7.44686 43.6585 7.32773 43.6486 7.21543 43.6124C6.71429 43.4885 6.25895 43.2241 5.90293 42.8502C5.66179 42.6109 5.46274 42.3326 5.31418 42.0271L6.16355 40.8393C6.56371 40.9868 6.92639 41.2208 7.22574 41.5246ZM16.8754 29.9999C16.8754 30.3824 16.1451 30.9374 15.0004 30.9374C14.7147 30.9371 14.4305 30.8954 14.1567 30.8137C14.7136 30.2615 15.2817 29.7205 15.8648 29.1965C16.4751 29.3793 16.8754 29.7187 16.8754 29.9999ZM31.3261 24.763C31.2291 24.8303 31.1179 24.8742 31.0011 24.8915C30.8844 24.9087 30.7652 24.8988 30.6529 24.8624C30.1518 24.7385 29.6964 24.4741 29.3404 24.1002C28.5314 23.2912 28.4029 22.3818 28.6776 22.1118C28.7915 22.0186 28.9369 21.973 29.0836 21.9843C29.1733 21.985 29.2628 21.9944 29.3507 22.0124C29.8519 22.1363 30.3072 22.4008 30.6632 22.7746C31.4723 23.5837 31.5942 24.493 31.3261 24.763ZM35.3207 34.4343C34.3523 34.9883 33.4157 35.5902 32.5007 36.2212C33.3264 33.9984 33.7496 31.6464 33.7504 29.2752C33.7503 27.4005 34.1195 25.5442 34.8368 23.8121C35.5542 22.0801 36.6057 20.5064 37.9313 19.1808C39.2569 17.8552 40.8307 16.8037 42.5627 16.0863C44.2947 15.3689 46.151 14.9998 48.0257 14.9999H54.7279L53.6545 16.7343C49.1085 24.0657 42.8075 30.1489 35.3207 34.4343Z"
                        fill="#E56E1B"
                      />
                      <path
                        d="M56.8439 18.7077C51.9674 26.569 45.2096 33.0919 37.1807 37.6874C29.072 42.3099 23.0355 49.8555 20.3057 58.7812L22.0973 59.3324C24.6887 50.8635 30.4168 43.7042 38.1107 39.3177C46.4113 34.567 53.3974 27.8229 58.4376 19.6949L59.8598 17.398L58.2661 16.4108L56.8439 18.7077ZM5.98918 34.6293C10.2738 28.6471 15.8079 23.6681 22.2079 20.0371C29.9208 15.6794 36.2942 9.29413 40.6373 1.57303L40.7367 1.39678L39.1017 0.478027L39.0004 0.656152C34.8243 8.07932 28.6969 14.2184 21.2817 18.4087C14.645 22.1734 8.90618 27.336 4.46293 33.539L0.174805 39.539L1.70105 40.6283L5.98918 34.6293ZM15.6567 44.5499C15.2426 44.4465 14.8092 44.4482 14.3959 44.555C13.9827 44.6617 13.6026 44.8701 13.2904 45.1612C12.1748 46.2758 12.4664 48.314 13.9532 49.8008C14.5684 50.4371 15.3559 50.8799 16.2192 51.0749C16.4268 51.1173 16.6382 51.139 16.8501 51.1396C17.1698 51.1479 17.4879 51.0924 17.7858 50.9764C18.0838 50.8603 18.3556 50.686 18.5854 50.4637C19.7011 49.349 19.4095 47.3108 17.9226 45.824C17.3073 45.1879 16.5198 44.7451 15.6567 44.5499ZM17.2673 49.138C17.1703 49.2053 17.0591 49.2492 16.9424 49.2665C16.8256 49.2837 16.7065 49.2738 16.5942 49.2374C16.093 49.1135 15.6377 48.8491 15.2817 48.4752C14.4726 47.6662 14.3489 46.7568 14.6189 46.4868C14.7327 46.3937 14.8781 46.348 15.0248 46.3593C15.1146 46.36 15.204 46.3694 15.292 46.3874C15.7931 46.5113 16.2485 46.7758 16.6045 47.1496C17.4098 47.9587 17.5317 48.868 17.2636 49.138H17.2673ZM14.8636 35.6896C13.9977 35.884 13.2075 36.3272 12.5901 36.9646C11.1032 38.4515 10.8089 40.4887 11.9264 41.6043C12.1563 41.8267 12.4283 42.001 12.7265 42.117C13.0246 42.2331 13.3428 42.2886 13.6626 42.2802C13.8746 42.2796 14.0859 42.2579 14.2936 42.2155C15.1592 42.021 15.9493 41.5783 16.567 40.9415C18.0539 39.4546 18.3482 37.4165 17.2298 36.3018C16.9179 36.0103 16.5379 35.8015 16.1246 35.6946C15.7112 35.5877 15.2777 35.5859 14.8636 35.6896ZM15.2386 39.6158C14.8826 39.9895 14.4272 40.2537 13.9261 40.3771C13.8139 40.4139 13.6947 40.4242 13.5779 40.4071C13.4611 40.3901 13.3498 40.3461 13.2529 40.2787C12.982 40.0087 13.1057 39.0993 13.9157 38.2902C14.2716 37.9162 14.727 37.6518 15.2282 37.528C15.3168 37.5098 15.4069 37.5004 15.4973 37.4999C15.6443 37.4885 15.79 37.5341 15.9042 37.6274C16.1742 37.8974 16.0504 38.8068 15.2414 39.6158H15.2386ZM17.8129 40.3124C17.8129 41.8902 19.4601 43.1249 21.5629 43.1249C23.6657 43.1249 25.3129 41.8902 25.3129 40.3124C25.3129 38.7346 23.6657 37.4999 21.5629 37.4999C19.4601 37.4999 17.8129 38.7346 17.8129 40.3124ZM23.4379 40.3124C23.4379 40.6949 22.7076 41.2499 21.5629 41.2499C20.4182 41.2499 19.6879 40.6949 19.6879 40.3124C19.6879 39.9299 20.4182 39.3749 21.5629 39.3749C22.7076 39.3749 23.4379 39.9299 23.4379 40.3124ZM25.0317 34.1999C25.8975 34.006 26.6878 33.5632 27.3051 32.9258C28.792 31.439 29.0864 29.4008 27.9689 28.2862C27.656 27.9934 27.2745 27.7841 26.8596 27.6772C26.4446 27.5704 26.0095 27.5696 25.5942 27.6749C24.7282 27.8686 23.9379 28.3115 23.3207 28.949C21.8339 30.4358 21.5395 32.474 22.657 33.5887C22.887 33.8109 23.159 33.9852 23.4571 34.1012C23.7552 34.2173 24.0735 34.2728 24.3932 34.2646C24.6077 34.2645 24.8216 34.2428 25.0317 34.1999ZM23.9911 32.263C23.7211 31.993 23.8448 31.0837 24.6539 30.2746C25.0099 29.9008 25.4652 29.6363 25.9664 29.5124C26.054 29.4944 26.1432 29.485 26.2326 29.4843C26.3796 29.4728 26.5253 29.5185 26.6395 29.6118C26.9095 29.8818 26.7857 30.7912 25.9767 31.6002C25.6207 31.9741 25.1653 32.2385 24.6642 32.3624C24.5514 32.3995 24.4315 32.4098 24.314 32.3926C24.1965 32.3753 24.0847 32.331 23.9873 32.263H23.9911ZM7.21918 55.7624C8.08511 55.5687 8.87542 55.1258 9.49262 54.4883C10.9795 53.0015 11.2739 50.9633 10.1564 49.8487C9.84343 49.556 9.46198 49.3467 9.04706 49.2399C8.63213 49.1331 8.19702 49.1322 7.78168 49.2374C6.91575 49.4311 6.12544 49.874 5.50824 50.5115C4.02137 51.9983 3.72699 54.0365 4.84449 55.1512C5.07453 55.3734 5.34654 55.5477 5.64464 55.6637C5.94273 55.7798 6.26096 55.8353 6.58074 55.8271C6.79518 55.827 7.00907 55.8053 7.21918 55.7624ZM6.17855 53.8255C5.90855 53.5555 6.0323 52.6462 6.84137 51.8371C7.19738 51.4633 7.65273 51.1988 8.15387 51.0749C8.24181 51.0569 8.33129 51.0475 8.42105 51.0468C8.56773 51.0355 8.71311 51.0812 8.82699 51.1743C9.09699 51.4443 8.97324 52.3537 8.16418 53.1627C7.80816 53.5366 7.35282 53.801 6.85168 53.9249C6.73889 53.9621 6.61899 53.9725 6.5015 53.9552C6.384 53.938 6.27214 53.8936 6.1748 53.8255H6.17855ZM46.2192 5.1749C45.3532 5.36856 44.5629 5.81146 43.9457 6.44897C42.4589 7.93584 42.1645 9.97397 43.282 11.0887C43.512 11.3109 43.784 11.4852 44.0821 11.6012C44.3802 11.7173 44.6985 11.7728 45.0182 11.7646C45.2302 11.764 45.4415 11.7423 45.6492 11.6999C46.5151 11.5062 47.3054 11.0633 47.9226 10.4258C49.4095 8.93897 49.7039 6.90084 48.5864 5.78615C48.2739 5.49517 47.8937 5.28685 47.4803 5.1801C47.067 5.07335 46.6334 5.07157 46.2192 5.1749ZM46.5942 9.10021C46.2382 9.47405 45.7828 9.73847 45.2817 9.8624C45.1694 9.89897 45.0502 9.90902 44.9334 9.89178C44.8167 9.87454 44.7054 9.83047 44.6086 9.76303C44.3386 9.49303 44.4623 8.58365 45.2714 7.77459C45.6274 7.40076 46.0827 7.13633 46.5839 7.0124C46.6718 6.9944 46.7613 6.98498 46.8511 6.98428C46.9977 6.97298 47.1431 7.01865 47.257 7.11178C47.5317 7.38178 47.4098 8.29115 46.6007 9.10021H46.5942ZM50.6254 4.6874C50.6254 6.26521 52.2726 7.4999 54.3754 7.4999C56.4782 7.4999 58.1254 6.26521 58.1254 4.6874C58.1254 3.10959 56.4782 1.8749 54.3754 1.8749C52.2726 1.8749 50.6254 3.10959 50.6254 4.6874ZM56.2504 4.6874C56.2504 5.0699 55.5201 5.6249 54.3754 5.6249C53.2307 5.6249 52.5004 5.0699 52.5004 4.6874C52.5004 4.3049 53.2307 3.7499 54.3754 3.7499C55.5201 3.7499 56.2504 4.3049 56.2504 4.6874Z"
                        fill="#E56E1B"
                      />
                      <path
                        d="M46.8515 45.7341L44.9765 37.2966C44.9334 37.1031 44.83 36.9282 44.6813 36.7971C44.5325 36.666 44.346 36.5855 44.1486 36.567C43.9512 36.5486 43.753 36.5932 43.5826 36.6945C43.4121 36.7958 43.2782 36.9485 43.1999 37.1307L40.5534 43.306L38.1403 44.1113C37.9703 44.1679 37.8202 44.2719 37.7075 44.4112C37.5949 44.5504 37.5245 44.719 37.5046 44.8969L36.5671 53.3344C36.5437 53.5475 36.594 53.7622 36.7097 53.9427C36.8254 54.1232 36.9994 54.2586 37.2028 54.3263L42.8278 56.2013C42.9235 56.2338 43.0239 56.2502 43.1249 56.2501C43.2579 56.25 43.3892 56.2217 43.5104 56.1671C43.6315 56.1124 43.7396 56.0326 43.8276 55.9329C43.9155 55.8333 43.9813 55.7161 44.0205 55.5891C44.0597 55.4621 44.0714 55.3282 44.0549 55.1963L43.1999 48.3526L46.3556 46.7813C46.5436 46.6876 46.6948 46.5334 46.7847 46.3435C46.8746 46.1536 46.8982 45.939 46.8515 45.7341ZM41.7684 46.9735C41.5948 47.0603 41.4525 47.1988 41.361 47.3699C41.2694 47.541 41.2333 47.7363 41.2574 47.9288L42.0074 53.9532L38.5124 52.7879L39.2999 45.6994L41.5434 44.9494C41.6684 44.9073 41.7831 44.8393 41.8801 44.7498C41.977 44.6603 42.0539 44.5513 42.1059 44.4301L43.7812 40.5432L44.8649 45.4266L41.7684 46.9735ZM54.5503 42.9957L56.1562 39.7941C56.2377 39.631 56.2699 39.4476 56.2487 39.2664C56.2276 39.0852 56.1541 38.9141 56.0371 38.7741L51.3496 33.1491C51.2189 32.9923 51.0406 32.8824 50.8418 32.8361C50.643 32.7899 50.4345 32.8098 50.248 32.8929C50.0615 32.9759 49.9072 33.1176 49.8086 33.2963C49.7099 33.4751 49.6723 33.6811 49.7015 33.8832L50.5884 40.0904L48.9112 42.6038C48.8128 42.7487 48.757 42.9182 48.75 43.0932C48.7431 43.2682 48.7853 43.4416 48.8718 43.5938L52.6218 50.1563C52.7044 50.2994 52.8234 50.4181 52.9666 50.5004C53.1098 50.5827 53.2723 50.6257 53.4374 50.6251C53.5004 50.6256 53.5633 50.6193 53.6249 50.6063L58.3124 49.6688C58.4718 49.637 58.6201 49.5642 58.7429 49.4578C58.8657 49.3513 58.9587 49.2147 59.0127 49.0615C59.0668 48.9082 59.0801 48.7436 59.0514 48.5836C59.0226 48.4237 58.9528 48.2739 58.8487 48.1491L54.5503 42.9957ZM53.9165 48.6357L50.7881 43.1626L52.3424 40.8329C52.4713 40.64 52.5241 40.4062 52.4906 40.1766L52.0218 36.8869L54.2015 39.5016L52.6003 42.7032C52.5187 42.8664 52.4866 43.0498 52.5077 43.2309C52.5289 43.4121 52.6024 43.5832 52.7193 43.7232L56.3981 48.1369L53.9165 48.6357Z"
                        fill="#E56E1B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_756_1424">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </>
              ),
            },
            {
              title: "Targeted Therapies & Lifestyle Support",
              description:
                "Treatment may include cholesterol-lowering medications, customized diet plans, and structured exercise programs to improve heart health.",
              icon: (
                <>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 52.8C7.93566 52.8 5.18864 51.6621 3.16325 49.6367C1.13785 47.6113 0 44.8643 0 42C0 39.1356 1.13785 36.3886 3.16325 34.3632C5.18864 32.3378 7.93566 31.2 10.8 31.2C11.1183 31.2 11.4235 31.3264 11.6485 31.5514C11.8736 31.7765 12 32.0817 12 32.4V51.6C12 51.9182 11.8736 52.2234 11.6485 52.4485C11.4235 52.6735 11.1183 52.8 10.8 52.8ZM9.6 33.684C7.5977 33.9693 5.76557 34.9674 4.44014 36.4951C3.1147 38.0228 2.38497 39.9774 2.38497 42C2.38497 44.0225 3.1147 45.9771 4.44014 47.5048C5.76557 49.0325 7.5977 50.0306 9.6 50.316V33.684ZM49.2 52.8C48.8817 52.8 48.5765 52.6735 48.3515 52.4485C48.1264 52.2234 48 51.9182 48 51.6V32.4C48 32.0817 48.1264 31.7765 48.3515 31.5514C48.5765 31.3264 48.8817 31.2 49.2 31.2C52.0643 31.2 54.8114 32.3378 56.8368 34.3632C58.8621 36.3886 60 39.1356 60 42C60 44.8643 58.8621 47.6113 56.8368 49.6367C54.8114 51.6621 52.0643 52.8 49.2 52.8ZM50.4 33.684V50.316C52.4023 50.0306 54.2344 49.0325 55.5599 47.5048C56.8853 45.9771 57.615 44.0225 57.615 42C57.615 39.9774 56.8853 38.0228 55.5599 36.4951C54.2344 34.9674 52.4023 33.9693 50.4 33.684Z"
                      fill="#E56E1B"
                    />
                    <path
                      d="M53.9998 34.8959C53.7891 34.8955 53.5821 34.8397 53.3998 34.7339C52.1237 33.9936 50.6751 33.6025 49.1998 33.5999C48.8815 33.5999 48.5763 33.4735 48.3513 33.2484C48.1262 33.0234 47.9998 32.7182 47.9998 32.3999V27.5999C47.9998 22.826 46.1034 18.2476 42.7277 14.872C39.3521 11.4963 34.7737 9.5999 29.9998 9.5999C25.2259 9.5999 20.6475 11.4963 17.2719 14.872C13.8962 18.2476 11.9998 22.826 11.9998 27.5999V32.3999C11.9998 32.7182 11.8734 33.0234 11.6483 33.2484C11.4233 33.4735 11.1181 33.5999 10.7998 33.5999C9.32451 33.6025 7.87593 33.9936 6.5998 34.7339C6.41747 34.8392 6.21065 34.8946 6.00011 34.8947C5.78957 34.8947 5.58272 34.8394 5.40034 34.7342C5.21795 34.629 5.06645 34.4777 4.96104 34.2955C4.85563 34.1132 4.80002 33.9064 4.7998 33.6959V27.5999C4.7998 20.9164 7.4548 14.5067 12.1807 9.78081C16.9066 5.0549 23.3163 2.3999 29.9998 2.3999C36.6833 2.3999 43.093 5.0549 47.8189 9.78081C52.5448 14.5067 55.1998 20.9164 55.1998 27.5999V33.6959C55.1998 34.0142 55.0734 34.3194 54.8483 34.5444C54.6233 34.7695 54.3181 34.8959 53.9998 34.8959ZM50.3998 31.2959C51.2161 31.3738 52.0211 31.5429 52.7998 31.7999V27.5999C52.7998 21.553 50.3977 15.7537 46.1218 11.4779C41.846 7.20204 36.0467 4.7999 29.9998 4.7999C23.9529 4.7999 18.1536 7.20204 13.8778 11.4779C9.60194 15.7537 7.1998 21.553 7.1998 27.5999V31.7999C7.97635 31.5245 8.78141 31.3373 9.5998 31.2419V27.5999C9.5998 22.1895 11.7491 17.0007 15.5748 13.1749C19.4006 9.34918 24.5894 7.1999 29.9998 7.1999C35.4102 7.1999 40.599 9.34918 44.4248 13.1749C48.2505 17.0007 50.3998 22.1895 50.3998 27.5999V31.2959ZM29.9998 57.5999C29.2878 57.5999 28.5918 57.3888 27.9998 56.9932C27.4077 56.5976 26.9463 56.0354 26.6738 55.3776C26.4014 54.7197 26.3301 53.9959 26.469 53.2976C26.6079 52.5992 26.9508 51.9578 27.4542 51.4543C27.9577 50.9509 28.5991 50.608 29.2975 50.4691C29.9958 50.3302 30.7197 50.4015 31.3775 50.6739C32.0353 50.9464 32.5975 51.4078 32.9931 51.9999C33.3887 52.5919 33.5998 53.2879 33.5998 53.9999C33.5998 54.9547 33.2205 55.8704 32.5454 56.5455C31.8703 57.2206 30.9546 57.5999 29.9998 57.5999ZM29.9998 52.7999C29.7625 52.7999 29.5305 52.8703 29.3331 53.0021C29.1358 53.134 28.982 53.3214 28.8911 53.5407C28.8003 53.76 28.7766 54.0012 28.8229 54.234C28.8692 54.4668 28.9835 54.6806 29.1513 54.8484C29.3191 55.0163 29.5329 55.1305 29.7657 55.1768C29.9985 55.2231 30.2398 55.1994 30.459 55.1086C30.6783 55.0177 30.8657 54.8639 30.9976 54.6666C31.1294 54.4692 31.1998 54.2372 31.1998 53.9999C31.1998 53.6816 31.0734 53.3764 30.8483 53.1514C30.6233 52.9263 30.3181 52.7999 29.9998 52.7999Z"
                      fill="#E56E1B"
                    />
                    <path
                      d="M29.9998 57.5999C29.6815 57.5999 29.3763 57.4735 29.1513 57.2484C28.9262 57.0234 28.7998 56.7182 28.7998 56.3999C28.7998 56.0817 28.9262 55.7764 29.1513 55.5514C29.3763 55.3263 29.6815 55.1999 29.9998 55.1999C36.9358 55.1999 43.5238 53.5559 48.5458 50.5679C48.8165 50.4456 49.123 50.428 49.4059 50.5186C49.6888 50.6092 49.9281 50.8015 50.0774 51.0583C50.2267 51.3151 50.2755 51.6182 50.2142 51.9089C50.153 52.1996 49.9861 52.4572 49.7458 52.6319C44.3998 55.8359 37.3618 57.5999 29.9998 57.5999Z"
                      fill="#E56E1B"
                    />
                  </svg>
                </>
              ),
            },
            {
              title: "Regular Monitoring & Follow-Up",
              description:
                "Periodic lipid tests and clinical reviews help track progress, adjust medications, and ensure goals are consistently met.",
              icon: (
                <>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="60"
                      height="60"
                      fill="url(#pattern0_755_1386)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_755_1386"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_755_1386"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_755_1386"
                        width="96"
                        height="96"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFSklEQVR4nO2dTYgcRRTHyy/8RCEm7vZ7k12UJCcRv0AwOfiBB/XqCp4UjEvc6Xqzu/Hr5PqJFxHxIEbReBAhB0Ew5BA9yCYn3UOMByGgMdNVsy6Jxg+iRE1GaqZmpqfdycxmeqZ6qt8PimV6eqpf1b+r36vXXb1CMAzDMAzDMAzDMAzDMAzDMEw2+H76hmuUhIcrhNNcsGsxfWX6LJXO/3F2ItAEkSascsE1FIhM3/UtgJb4gvvG4EgWRbDQtwCKYFe9Mlzqu7KcoAiXrAC7UqiMBVgrLIBjWADHeCtAdUFcqOZho8g43gqgCd+3DdshMoyXApTnCpcrwlPWlkWRYbwUIArxwWaMLeG0ng6uEBnFSwE04duJSc69IqN4KYCSeLRtpinxJZFRvBNgmQo3Ns98ib/bvwdERvFOAE34nE1w/a0kvJp1P+CdAEriATsCPo9KeEfW/YBXApTnCuuUxH/sdX+2uiAuVoS/ZdkPeCWADoNHmmd8EbZYm/b16gdWZibHNeErEeFNQzHYNwEUwUf2mn+ksU1T8EyvfqA1e8bvqkJcMBybPRGgOiUu0oQnbGe/0djeqx8wv1cSjzf2jUp41zDs9kYATcG21Tq6Vz8QSby7ffKGHw/Dbm8EUBJes8f+44jcdGnCrn3d8kJKwpvtkzc4XZHjGwZuty8CaAnf2IZ88r/vevADjdmzIjyoJJ6xde30RgCToTSXALNPimWHqVtTMNE6e4PHk8fu5gdUCW5uXvslPqQk7reCqbRs1YQvHn108jJnAsRDxDRLRPiAkvCkPe5ZE0omj13zAzYtoQlf7vw0B/y1MrPhKlXCqUHYavrAmQA/0XVjmmCv+S6NoiWcrMf38JWp1zbi63PY1nE+oAkOWQH2NiMignfSsrVuL35m+sCZAGmjZWF7LOlWu2abM7nj/h38wHI4dn3L8Ra2iyEzsgIsTd92iSL8IT7EK8WNt3fav5MfiAjnGiKudvkaNCMrgEGX8IlY3L5ibsSLDnSaDyiCL7uFqINkpAVYio0CRfBeD/a1+QFVhGsbyTsl4alh2OyVAAaTODMJtNUcXDc/oEJ4rDGCynOFTcIBIy/AWkj6AUX4qY1+DgtH5EqAarsfeL3x6IrLewW5EiDuB7SEP3uJngZN7gTQEp9NJN3UsHL/q5E7AaKYH7ANf8ulPbkToBr3Axm4WZ87ARJ+4KSZSwiH5FKASoj3m5mzCuFp17bkUoAswQI4hgVwDAvguwAmyogIN8f3W945dqW5jxvfZp5ASD6FUJkZnzT7th2jCFtMKOlL/QMXQEv8sB5zB2FzPwnfKsJ/dRhsbRhfj83hVz0frK/9joJt9TtdrUSZlgVp4/fdvtQ/eAEId9t8e7G1DQ6bBigJd9Y+zwfra8bHGxAGW2uNJDjU+l0Q2uTZB77UP3ABzHBL5trNsEwuITVnUcP4mMETySEcEW6OD+FRr5+dsGNYAMewAI5hATwTYCH1x/lyUpSE59N5ZZnEsuvG6FErEsupPRRWe2lfCaeG+uI7wsX6WYTHzv/leXisVgfh4lBtL+HUCbnuajHKqBR8T6rX4ryhWAC3KBbALYoFGA56NrhVSXi3to4rvgDCLi81T7r1sYjilHXkxxPbD9aWGUm4ReQZLXG2uRDDSZyOZ3SIJPKIpuA+s/6rHjPDz5pwT8qL/c61uG6PJvjFjrCzUYj3iLyhJX5hO1+l8o7l85pggrIjYb/IG2bxtU7r/cp9plnMakuRN5ynCqi9iLzhusN13gVw/U8WKoniuj8YhmEYhmEYhmEYhmEYhmEYRgyO/wDZRz10NXK+TQAAAABJRU5ErkJggg=="
                      />
                    </defs>
                  </svg>
                </>
              ),
            },
          ]}
        />

        <WhyChooseOmega
          heading="Omega Hospitals: Managing Heart Health Through Cholesterol Care"
          cards={[
            {
              title: "Expertise",
              description:
                "Get care from leading cardiology and endocrinology specialists working together for effective cholesterol management.",
              footer:
                "Our combined approach ensures precise diagnosis and targeted treatment.",
            },
            {
              title: "Prevention",
              description:
                "We focus on reducing your long-term heart risk with lifestyle guidance and personalized treatment plans.",
              footer:
                "From diet plans to advanced therapies, we help you stay heart-healthy.",
            },
            {
              title: "Monitoring",
              description:
                "Regular follow-ups and advanced lipid testing help track progress and adjust treatment as needed.",
              footer:
                "Ongoing care ensures cholesterol levels remain under control for life.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
