export const servicesData = [
  {
    title: "Diabetes — Children to Old Age",
    description:
      "Comprehensive care for Type 1, Type 2, and juvenile diabetes across all age groups. We focus on early diagnosis, personalized treatment, and long-term management.",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <mask
            id="mask0_1090_3077"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            x="0"
            y="0"
            width="44"
            height="44"
          >
            <rect width="44" height="44" fill="url(#pattern0_1090_3077)" />
          </mask>
          <g mask="url(#mask0_1090_3077)">
            <rect width="44" height="44" fill="#EF812F" />
          </g>
          <defs>
            <pattern
              id="pattern0_1090_3077"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1090_3077" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_1090_3077"
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
    title: "Thyroid Disorders",
    description:
      "From hypothyroidism to thyroid nodules, our experts diagnose and manage all thyroid-related conditions. We offer advanced testing and holistic treatment plans.",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <mask
            id="mask0_1161_1272"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="60"
            height="60"
          >
            <rect width="60" height="60" fill="url(#pattern0_1161_1272)" />
          </mask>
          <g mask="url(#mask0_1161_1272)">
            <rect width="60" height="60" fill="#EF812F" />
          </g>
          <defs>
            <pattern
              id="pattern0_1161_1272"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1161_1272" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_1161_1272"
              width="96"
              height="96"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAANjUlEQVR4nO1cCZBcRRl+JB54K16oKApJpnuWQ8QLFaJyiHdQQNQCxICopRZ4H8AIBQIilIggy+50z4Yi4kimezYxGihNVLBEQA5FEDnUcJkVCYeABFjr6/7/93rfzOy+zW42vH3vq+qqTO973S99/P0f399RVKJEiRIlSpQoUaJEiRIlSpQoUaJEiWJhwZL2a6S235LKHF9RZsfpbr9PDb9BanOG0PYk2Wj3TXf7uUZVtd8plP2f1HbUFWWeEMp8drral9p+Gm0m7dvHqrq973S1n2tUm82nSWVux8AIZS+XyvyKJuHhHQbaL51y+wPNrYQyD7r2tf2Z1HaNnwhzB/qOig7RsIfQylw/7/yVz11YW/0Uqey/UVdR5l1Tbb+izdtpcv8V1Wpz0IdU5j5X17CHREWH0PYaEgvfw+/5jeWvENpsoAmY8lmwQA8Lv/rNhnnnLdsGdVKb02lHXBMVGaLeWsiDIwcv2tbVKXsqiaBro9HRLabcyejoFjzJQpnvogp98STLht0jKiqEsoMkHgx+Vwbtc4Sy99IEtIRqf06q5fM3uv2h1guFMocLZdrUz73ow/ft66Qy50VFxLZ69ZY82NW63R910HxiTSXQWKQ2X51s+0K338xnSVhYu6rq9gH0+z/zzlz59KhoqDbsB/jwxWSgztkBPFDaXC+VvTL4fVTWtvsare2FtvfQAP9DanNFMgl+MrdpNp8RH8b11vuiokFqezaJgB9z3a79w8+sKnNkpWHfEctvZc7kc2KBbr91woabzblSmUtp8P8MMYRqMdTarVq3h/Fkuzplf0KTclZUNAhtbiLxc9i4D9Zqc6Q2F5PW8vedtXn+uO2q9jdoUB/pqy/bebxnpTaLaXJvioqEijavZpEwj1TD8QCDTChzFx2kK3ft739q13aVeX+s3Wj7lYna7VPmlfwdcIVERYHQ9giW81HWd1R773hwlVkhzl/2Mv4bJgSyHdYz/x07J1u79i9ot1BGGfTxtPzPgqq2H5faPk6T91+4LYQ2l6S0nTU4YDM1GJwDsD+iosCtVn9I/nrS7zZa75bK3NqhXmr7gFDmxMmqlELb39Ji+HJUFMDFQAP3OM6Dyb5PImdPqe0XUCD72cCaDObXL9qOd1ThXNRSm6toEi7YfN9gl5Kxd2VUNGDVSvL9V5R5y0z3D5uCYwRC2/dGRYQk/R6WalatZVrgjDWyspVdFRUVUi2fD4OJDuTDZ1oNdn1Pwdk3KyC1PYVE0aUz1qeyv6Pz55SoyNhWr95SKtvPIUhEwzZ1n6RBuV2HvgvpCQWqP2w+O4nP+tI31JKbvN+6rabc3at3WrLqWVGh4KJU5qe08u+T2oyQNnLQpu5a1FsfJfk/Erujtb1wWqJveYHQ9uu0+h5CSBARMZqMk2fwzGm5gD37jzI472YF5JDdhZ1qVW0+jzqhbI1W5cWbun/nO/Kr/jj6fVQcb2i0d4pmNWq1OUKb37PTLCLdH55O9udsSq4ODlzmCMm63Sv5Jvsb+qbLZtQemWk4hpof6EfFUGvBGG1I2/W0CxaF78DHA0sZMVxX6q23IXKWbptCjLt7GW8WVbV5LQ768BnRsPulw6DURwXfRN92RDQbAU0D5Cja7t9P/11qcxYNzi0QD46eouxqHpiU5vKQY7kpewIKgjTuPOn0kD6KNiD30SZ7UYWyP+jVPwI/3SY49xDKfI1ZCBynDVHR5sMdAx0OuLI3gyvEmkuPsh7PCG3+5uIFPZ4Tqv2hDt9Q//CL4l0421zTECOsakplj+l1OMuEubBMaHO+VOYG2jFNfg7GGghdjuWs7QUoiAOgLjTkAjX3BqHsEqGNjdsfsrt0+wa3S/wz69LiK9eoaPMlXqFhUF1oexCHFlHPA1QdGn5VQimnCJiyX8zan6jbozneUG203og6tMnt8zegb6nMR/i9HS9Y8YKEqmKPjmYFPE2EIljmO1wtVPtQDBB4O0KbY0WjtQ9rKKCrd+jt/v3Txws30mEePx+GGdEmicAHndal7DGeM4RvaB8a96fMyfTuzbNCI5Kq/cFA/i7lrQ0tRWpzR1cZ3TCfihuAmqjMj5KD1dyNmDKY09WB9jyX2FG3e2Fyx7QHymEwgIkHNF3MHfiWgId0Iv8NMYto9vj84wG8hGkl1YHmVp7NAE2FzogeAXKpzcGsRY1fzEg3rlFM+vXnEIL4a9A3xE569SffYX4e5RmVQfvyOOaqzbfZ7MeZ0O156VaxP4R7iRgMLtwIbrVzREuZu0C2xSrvpUKizfHcHUINvy5pzy6hiXospL/kDjg46T9yG7Y3cz+Fsld3e15qczAN0rVZ2ofVHBpU434LU9R78H8CO2S5+1Zlb5ssJ/VJBw77QWVMZavc2+35Pq/1sKF1HAYLPFGQbSfjt8ezeAfvog3XFtkF6KPHt64Kybt8mCNtKsojqnrF1vGWHly2Q8iIBsezp72ggmS6Tvn+CJ0VtxCrYg3J8quobiQOtvQoSFHq1jdIYqGIAq+Ufj+x05JlL4nyhooyH0vTD2EBu0kIdO9E+2gfCjZzMNg3OrHRheOfvZgRL3rMjcEBfCd2RPqscLtF24PAFeI6fm8m4hTTDqntAP2nz56Y/WwHuvhxLuRHoPvDeedElFc5F2GCoa6i+Mk2i/C3yqB9PZ4N7QW01emOsJdDCxvv04S259Kk9Ud5A2iHWejnwhtkPjdY29NkvfUZNpg2hjWXBuyEOE0V54HLwjH30w5pTPB/OJwmbE2UN0DO+/90ax+ugxEmtD0nXHlC2avDLEmXpqrtdSyGmLQFkeFoLA27B1Ka4JrmHeDd1HZ/uKPxjBMvo6NbOPJVIn6uY18RiFgkHjds1998Xmyxa3NGSFNxPFTW4vIGThGC/57rQBun7b/SxWBrLkDTkZLqU0sTw2zqxYygzVTm5APuW4Zau/nvNcfSTrydeaZuQslwi/IGPjzDCcC/4ysJlNndr9JhAfU0rc9TvvD1XQZ0nXdNQ8VF7pe5Av92ddqu6zxLzPXdkkDQJzQdnBWOoUFGYuj0iydAm5Eob+DBCCcAiN3CyhyfmTyr7QAGMUu4Es9Q5gsf7EsnfEe396XJunuM/4jzmJFlnzewBzTt0GI+PrZ8RIDMRkAm7X0M2MsnhPXuXGg258YVzebcdAKfi5b1mACksCIMGf+mmDRc0WEcwGlW7BnNGygUOMavHsjZJ0KZL5CQ3UXb6DYB0NNdTNm5se25UBHJpb0B1u9EE0CBnDH1WACBo2857zRExmix/DLKbRpS4FhzDrkuK1pyrkCqvhtko3Vgt3Cjq2u0DswqbmAxh1YxcoVdUrgyK9jt4Z1+OeWQBnGAdSHrDKpd+HshQoykCfXy06Tho2dmMXKIfR6xWTxR+ioDrnCeQNaA4m/TZs/Y5+Sch14Tg/Ue5Q2ZU0BrtTn+OgLH1XnT2ERucwXcBhsTn0VbUtmLpLJ/DSd2DDk36K/j+xut7SeTSvukBBgQ/hxoLeQ6aD+OER0ExgUTo5A1SbuDzxASL3/o5UTrBhzoQb7wGEWAmXA4cNkf5O8Qsv0oTNSNPbfa3hPlFexTd2KHEDvcAoeccDFa54p4lMODomF2xWDxhR5Z00hh2SY3rthV3mpesXXibbV3Unu1bruVRZlU5j30nbdGeUXsTWzY/eI6upIsVEMTJsNYVlzoVYX/xrkf/FUEIFqdw6vWa0L2VPxNaKN44LrFEEBPx7shhcU7+HwcgndgzKJT5oYorxDK/JH+Y59Mc2+EtmtBhsp4rU1yoV/GAuZcFso5XZG2Kh0D5nskoKFFeUVyyUay2ufVmy9mN4XQdi0zpCdK6qbBQBx4hbvoKVj9tAMGva8pYUaABj9xpmasAj8WWu0BSesXUV7Bd7OlMxG9huJvSmRfOxGzBkIL1XlA2XUMGyFLEsUYaom5Pwy8YMfBEGP1s6LNJ1j0pGPFwQ0tp0V5BctWaCRhpAkAHURocxSriMyec+FKpq2THHaHMyJpaC9DwbMx2zk4f5LAjDcO3Tcoc2L625wKSqpxfHdRLuHdzd6jqeyViFaN8eEEgKpJh943A0KWC+pMpYRuBAwm9fFw17ywZnMu3bDLWfx/yn3qEhxnYaAcocCQDNUrfhD4cuKAvGNWZyjpwDyfBd4II9sgEHUxLzS82kyZh+G0i2YDMKjIzQ3u+7k0zfGUjtUAXqg5MqQi8hmAuqz9xe8HVHaonjHTQdvR8FZeSu7w15x50XVZpuvR8ga6n4GT4obZuiVZ7K+RDFeuG8g4cWLSE4BEDCSDJKuaXB7K3gbWHlRQGG7wgPKq3xz3VswoQPHggRDOrdyp4/vryczBeF4qM7TRIkiZIe4TKm+XM+LxOAPHX+h9QFQEeE9pBzN6vb9c2yxm1REB/YRbulEF1PO94xQp3FPtLoSlRL1EPK0t3NWV2P59Qy2JwIwjwHbh4gtt6mzVOr4P/EMZinvW35QOMTTY0XmtNgcJG3jWBet7aGaFh6SIGHT1yb4b8PwnjAmX6AFH1PI74J9p18NEhWV+oS7j2yT5BYpcFhtlhNm1ueb3Pxkg+Opiz6A7JUthth3e3dzfn3tU6/YwpKlOJoMdz+KdCa9FLlGiRIkSJUqUKFGiRIkSJUqUKFGiRFQY/B/bdAUnIgfFngAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      </>
    ),
  },
  {
    title: "Obesity / Overweight",
    description:
      "We provide medical and lifestyle-based solutions for weight management. Our approach targets root hormonal causes and promotes sustainable results.",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <mask
            id="mask0_1161_1269"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="60"
            height="60"
          >
            <rect width="60" height="60" fill="url(#pattern0_1161_1269)" />
          </mask>
          <g mask="url(#mask0_1161_1269)">
            <rect width="60" height="60" fill="#EF812F" />
          </g>
          <defs>
            <pattern
              id="pattern0_1161_1269"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1161_1269" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_1161_1269"
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
    title: "Growth Problems in Children",
    description:
      "Specialized care for children with delayed or abnormal growth patterns. Early evaluation ensures timely treatment for healthy development.",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <mask
            id="mask0_1161_1281"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="60"
            height="60"
          >
            <rect width="60" height="60" fill="url(#pattern0_1161_1281)" />
          </mask>
          <g mask="url(#mask0_1161_1281)">
            <rect width="60" height="60" fill="#EF812F" />
          </g>
          <defs>
            <pattern
              id="pattern0_1161_1281"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1161_1281" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_1161_1281"
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
    title: "Osteoporosis",
    description:
      "Protect your bone health with early screening and effective treatment for osteoporosis. We help reduce fracture risk and improve quality of life.",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <mask
            id="mask0_1161_1302"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="60"
            height="60"
          >
            <rect width="60" height="60" fill="url(#pattern0_1161_1302)" />
          </mask>
          <g mask="url(#mask0_1161_1302)">
            <rect width="60" height="60" fill="#EF812F" />
          </g>
          <defs>
            <pattern
              id="pattern0_1161_1302"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1161_1302" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_1161_1302"
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
    title: "High Blood Cholesterol",
    description:
      "Advanced evaluation and treatment for cholesterol imbalances. Our care helps reduce heart disease risk through medication and lifestyle changes.",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <mask
            id="mask0_1161_1265"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="60"
            height="60"
          >
            <rect width="60" height="60" fill="url(#pattern0_1161_1265)" />
          </mask>
          <g mask="url(#mask0_1161_1265)">
            <rect width="60" height="60" fill="#EF812F" />
          </g>
          <defs>
            <pattern
              id="pattern0_1161_1265"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1161_1265" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_1161_1265"
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
    title: "Gestational Diabetes",
    description:
      "Safe and expert care for managing diabetes during pregnancy. We monitor both mother and baby to ensure a healthy pregnancy outcome.",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <mask
            id="mask0_1161_1291"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="60"
            height="60"
          >
            <rect width="60" height="60" fill="url(#pattern0_1161_1291)" />
          </mask>
          <g mask="url(#mask0_1161_1291)">
            <rect width="60" height="60" fill="#EF812F" />
          </g>
          <defs>
            <pattern
              id="pattern0_1161_1291"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1161_1291" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_1161_1291"
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
    title: "PCOS / PCOD (Polycystic Ovary Syndrome / Disease)",
    description:
      "Expert care for hormonal imbalance, irregular periods, weight gain, and fertility issues. We offer personalized treatment plans combining medication, lifestyle changes, and long-term management.",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <mask
            id="mask0_1161_1286"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="60"
            height="60"
          >
            <rect width="60" height="60" fill="url(#pattern0_1161_1286)" />
          </mask>
          <g mask="url(#mask0_1161_1286)">
            <rect width="60" height="60" fill="#EF812F" />
          </g>
          <defs>
            <pattern
              id="pattern0_1161_1286"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1161_1286" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_1161_1286"
              width="96"
              height="96"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAJW0lEQVR4nO1dfawcVRWfUomgAiJ+fxWb17f3zoNWbYjfEBJQ/lDAoDEqisTErxj8CBKN4lNQVAyQKomub+fcfa8UZHlvz5lX0tpQqB8IRKNV8CP+IRaiUStWW5VWWt4zZ3aLup37NTs7sLv3l8w/7+0995xz586cr3smigICAgICAgICAgICAgKGA7G69bmTKn2NhPS8OKGLa4BvErD48rVz25466LklbF7z2LwK3xM36Vz+26DnZdlYRpaV52YeWAenzKTPiarAZH3xmULhlULRzyTgklS03HsJhf+SCheYuWh5eUVZc09s3HK8BPqMBPx13rzZ3EC/4t/UGnRcWfOyDFLh+RKwLYEezp0bcIl1kulmtn1SNAgIoI9Lhft0wucrBH8qmu3X9zu3hPQ8qfAPznMD/p7v0n7nrQG+QQDt9JFZAu4VCj8alYbp6aMkUN2LiSMX4oaJpPUs77mXl1cIhZfrdptFETzm00VEZl6lok19yazom6y7qF8IRZ/sh5H/WYQ9oonvc533jOkdT+p34TsXNtfX60e7zhur9K1S0e4yZJaKPlFY8RkzCcUC6N8lMdO9M2mbbKZTpnlrCk+WQHeVNyfeKRvzq0xzisbCKULhbWXKyrqbVIui8AKUcwfmXo8KwK0iab99arYtJzZsefI6hU/vWFX4Le3Lrh9lsHEAVK8Bvnp1vXUCz8lz1wDfIRV9h3kahKwC8BuFlM8MCsB/DmgBxuYSiv7BuvRegOxufAIIIEfgEip9pfcCSEWXPN6MyxG5BKQf9l4AAfgF9wkI44TeIgFfJxVeJRUeKF8I+rNQeAs7OzJpX8g2Oj/P+YpVeg7/Lfsf0Dz/tnxF4gGh6IssI8sqFJIz7wqv9N8BgNc7Ek96x04207VC0a6+FK7okcxiArx0KllY5+VVLy+viBW+lMcyjYxWf7zsqgGeeqSOSDku3te9F0Ao+qoLcZ2ZNTmXvkQoerCAwPeKhD62dm7h2VFJ4FhNx5On+/x3Hj7AsujMdEcaV3szLRVe5kL8ha3WsWY/Avd4CPsLvmtrDapFJYNvFKYtFP7Sg589bKrqaK6vLz5lYA4ZRxldiMcz6YSJjkjaZxR4JzzK/oBpcV3BNARQwzucAbifebdGZZ0WMr1oYGaoSNpvtNHKXtAFHB0BuJVDElFBdMMZ23znlUCHagovsMrFYXAXOWbbr/JmfpXacYzbnYtNF3pdK+WgtzIUfs6b+cNzAl3hvegKD8aK3ulCXwDNueykQo5YJoCiHzooaB+HEVzodRInuNf3URDPLr7Ym/fG/CrvRx/gXtcw9qmbbj3RJVIgFP3Al3fvO4gtJh/FCKDtno+iDYMyo/87B223Bez+j77Cawe9gyOOWjpOcoAtHh/aAtKzOU/g8nIUQH9ji8OVdtc6+bvDHb/EPDAvXrxz5NQxSmyyopzAdrnjXXRfEatFsOnptsjnu9LkF6gjz/cWClJyStZtV+2M+kXXgXHdxjdHrdbKqjxuHSTgrCO/X4t80Gqt5HCIsz7KSE12kuHuL84sFeeBmOM4LrSBfudK09UD93r0cHLeKz+C+zjv4KMLvUCAG9wnzia/xjV2s75eP1oo+qsL3SnAF9noZdk0Nx7/4pyq7Cj/Oi8dAF0XlYVag57vlZzhyoDZ9mTZcSfJpS42Wk16s+Pj5yvO/M22J30qQlhXYuPC86Iy4WGSPsjFS942O9ChMmIqAtJPOXq6J/vwyNFQCXi/4+JO+9B2Y6BBxwmFf7JMjFy8VYS+5MInu2ANOx2HEDHQfNFyFVseQAD+Mb6+9bRoEJCKPqBRzE6XmJCRdkKvsPkELl6l1XsHXJqCxdP64ZW9ZQn481wePUpv/NFqrZSAd3cmy56Jm2RCZ5VVgiiA0HL37rbRkEAPmWngQhm8ZkVjkJ4tFd342PsB6K5SirFM4GcnJ5n7iVLqEHOCw/Iu4BiMdvxM6xm2Z39fdToasC5YJ77vlSckhEIwKdGUrGG337KDZqqVZgixprn5BabCLE7C68bGSfu1hmf/fhc/IiDKnuNap4dD2uYqau2z/5pqpRjywx8ScH/uAiR0sW6cVPhejfIPsDNZrRRDDsk1ovmPkkt9CwkK12eOM+KZdCLXIgL8km6MVPTlI30HPLgmmV9dLfcjAgH4vRxTsu61a4B2VMv1CEEATed43XPa3yvcmLMDLq+W6xFCLa82CfAm3e+Fom+XUpMTYLJq9KGE7HSmh9UUYAGnDHOsmkXd76WizQNNjIwVpqePykstcrWcbkj3qFFvBHXXwANkowiZ0Fn5Nj1t144BvCM3fNGkM6vlfgQg8x4nnTv6+7ox/D+NI5ZWy/2QIzYH1e7WjRMK7ym1QHYsscwVCIeTPrnXd3VD+X+GhbuzzN4VIwsJ+DaD8tkMvUo7Njufph/LZfLVSjOEkAp/bFKiqfkHH9wzjlV4T7XSDBmmkoV1ZgXSI6Z+RFyUay2anaWXVSvVEEHYjsZy0tsCa48JoCuqkWaETE/p8Px3fQ8Ek7SPuzdW6Tnexb5AD3VOX3bLVRx20dhCclsZ0w5o0ulWGk06vesx39xbgMVJnhjw/QMVYpghLScaTQn5w+AKvRCCLghpqQ8VTXq3jYZPd6yAHjgcgLikd0xAiZCAn7f4AZ99vHkcacik/UGLGRqKqwYJyQ1SzaEEKEJXAH7I9/DgWCLmHj9GLxbbvjSzEvLs3AFeNhiuRwir660TLDvgdt8zvRLoN10H7OFQoOUAYewvhD/p51ybKZ8c0AUr2bALfht5dVg/ssCXT1G60hhLCMNJdD5P7EwHcKsmGPcAt+IZrBRDDAF4tSGUfMglrWjMKQeHrj9fYGLjluOtNEy54c61u9RvDIwSYkvvCFvzJtfeE9wVvjqphu1cgNIrjnuSmsabSlN63gV7qvjcyvCh1VppbDVmyAlwIyUX5ftEV8cSwtDEyXhIz5KOzNkFwS/IA/dyKHLX6kxP08tYR2usIUzVEUAf6cP66aGFe6uVbEggFb6rSE7A94sfQuGPqpVsSDAFi6fpFYfX+pa0G3aA9sjrWGOi06duqUhOwLlVMeD9Pq0wxw5S9+E2S06AG0bZWm1y4ymbPzH2EApv1yzAHbax3LEq6zfRGw0FOtSpFwpNO6yoNelM7j7Ve/k0cGVPt/M5wvQi7nJV6Gt+AQEBAQEBAQEBAQEBAdFI4T/Y0aOonyjPQAAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      </>
    ),
  },
];
