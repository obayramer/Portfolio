export const userData = {
    summary: {
      name: "Ömer",
      sumTitle: "I am a Frontend Developer...",
      sumContent:
        "...who likes to craft solid and scalable frontend products with great user experience",
    },
  
    skillsTitle: "Skills",
  
    basicInfo: {
      profileTitle: "Profile",
  
      title: "Basic Information",
      birthday: {
        title: "Date of Birth",
        data: "17.11.1998",
      },
      residence: {
        title: "City of Residence",
        data: "İstanbul",
      },
      education: {
        title: "Educational Background",
        data: "Trakya University, EEE , 2021",
      },
      preference: {
        title: "Preferred Role",
        data: "Frontend,UI",
      },
    },
    aboutMe: {
      title: "About Me",
      data: "I graduated from Trakya University with a bachelor's degree in Electrical and Electronics Engineering (EEE). I worked for two years as a backend developer at Havelsan, a company in the defense industry, focusing on the integration of weapon systems into maritime platforms. Currently, I am receiving full-stack developer training at Workintech.",
    },
    projects: {
      title: "Projects",
      content: [
        {
          title: "Pizza Challenge Project",
          description:
            "Pizza project allows users to place food orders by collecting information such as name, pizza size, and toppings through an order form, providing users with an order confirmation, using technologies like React (SPA).",
          used: ["react", "vercel"],
          viewSite: "https://fsweb-s8-challenge-pizza-nine.vercel.app",
          git: "https://github.com/obayramer/fsweb-s8-challenge-pizza",
          image: "./pizza.png",
        },
        {
          title: "Film Project",
          description:
            "IMDB Film Database project developed using React and Redux.",
          used: ["react","redux", "vercel"],
          viewSite: "https://fsweb-s10g2-redux-filmler-solution-navy-delta.vercel.app",
          git: "https://github.com/obayramer/fsweb-s10g2-redux-filmler-solution",
          image: "/film.png",
        },
        {
          title: "Watchlist Project",
          description:
            "Favorite movies archive, a film project developed using React and Redux.",
          used: ["react", "redux", "vercel"],
          viewSite: "https://fsweb-s10g3-redux-watchlist-solution-umber.vercel.app",
          git: "https://github.com/obayramer/fsweb-s10g3-redux-watchlist-solution",
          image: "/watchlist.png",
        },
      ],
    },
    footer: {
      title: "Send me a message!",
      content: "Got a question or proposal, or just want to say hello? Go ahead.",
    },
  };