import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  article = [
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "ABC News",
      title:
        "Southwest plane lands safely in Chicago after close call with jet that went on runway without authorization - ABC News",
      description: null,
      url: "https://abcnews.go.com/US/southwest-plane-lands-safely-chicago-after-close-call/story?id\\\\u003d119174069",
      urlToImage: null,
      publishedAt: "2025-02-26T02:26:29Z",
      content: null,
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Sarah Ferris, Lauren Fox, Annie Grayer",
      title:
        "Johnson and Trump pull off surprising win to advance GOP agenda after vote whiplash in the House - CNN",
      description:
        "Speaker Mike Johnson pulled off a stunning turnaround Tuesday night to rescue a critical vote to advance President Donald Trump’s agenda that had seemed doomed just moments earlier.",
      url: "https://www.cnn.com/2025/02/25/politics/house-gop-budget-trump-agenda/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-2201316480.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2025-02-26T02:17:00Z",
      content:
        "Speaker Mike Johnson pulled off a stunning turnaround Tuesday night to rescue a critical vote to advance President Donald Trumps agenda that had seemed doomed just moments earlier.\r\nSurprising even s… [+6125 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Nayara Batschke, Matias Basualdo",
      title:
        "A sweeping power blackout leaves most of Chile in darkness - The Associated Press",
      description:
        "A sweeping power blackout has left most of Chile in darkness. Tuesday's blackout sent internet and phone services offline, paralyzed businesses and forced evacuations of tunnels and subways in the South American nation. The grid operator blamed a disruption o…",
      url: "https://apnews.com/article/chile-blackout-power-outage-south-america-failure-electricity-8224a4cbcfc98c4f17e7d1e3b00936b5",
      urlToImage:
        "https://dims.apnews.com/dims4/default/9259e11/2147483647/strip/true/crop/5559x3127+0+290/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F73%2Ff6%2F52f070c439be0cbcf15f7ab53a05%2F9c391dda6b384e3880021384c7275ce8",
      publishedAt: "2025-02-26T01:48:00Z",
      content:
        "SANTIAGO, Chile (AP) A sweeping blackout plunged most of Chile into darkness Tuesday, stranding commuters, knocking the internet offline and paralyzing businesses and daily life as officials scramble… [+3627 chars]",
    },
    {
      source: {
        id: null,
        name: "Tom's Guide",
      },
      author: "Mike Prospero",
      title:
        "Amazon Alexa event — live updates and last-minute rumors - Tom's Guide",
      description:
        "Everything you need to know about Amazon's Devices event - Alexa and more",
      url: "https://www.tomsguide.com/news/live/amazon-devices-event-feb-2025",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/B6jXXracendKsGAuPin42Y-1200-80.jpg",
      publishedAt: "2025-02-26T01:07:30Z",
      content:
        "2025-02-26T00:45:56.328ZCheck back tomorrow for Amazon's event\r\n(Image credit: Tom's Guide)\r\nAmazon's Devices event starts tomorrow, February 26, at 10 AM Eastern, 7 AM Pacific and 3 PM in the United… [+8083 chars]",
    },
    {
      source: {
        id: "axios",
        name: "Axios",
      },
      author: "Stef W. Kight",
      title: "Senate GOP squirms over U.S. vote with Russia - Axios",
      description:
        'Sen. Susan Collins (R-Maine) called the United Nations vote "shameful."',
      url: "https://www.axios.com/2025/02/26/senate-republicans-trump-un-vote-ukraine-russia",
      urlToImage:
        "https://images.axios.com/FnLDZe1TBhxgUUkcn6udK-ryRrQ=/0x0:5497x3092/1366x768/2025/02/25/1740518146199.jpg",
      publishedAt: "2025-02-26T00:51:34Z",
      content:
        "The U.S. vote against a United Nations resolution condemning Russian aggression is becoming another tension point between President Trump and Senate Republicans.\r\nWhy it matters: Republicans are brac… [+2096 chars]",
    },
    {
      source: {
        id: null,
        name: "KSL.com",
      },
      author: "Logan Stefanich, KSL.com",
      title:
        "'It's really sad': Utahns react to craft giant Joann closing all its stores - KSL.com",
      description:
        "Utahns are reacting to the news that fabric and crafts giant Joann is going out of business and closing all its stores, including 13 in the Beehive State.",
      url: "https://www.ksl.com/article/51261612/its-really-sad-utahns-react-to-craft-giant-joann-closing-all-its-stores",
      urlToImage:
        "https://img.ksl.com/slc/3043/304347/30434721.jpeg?filter=kslv2/responsive_story_lg",
      publishedAt: "2025-02-26T00:33:56Z",
      content:
        "SALT LAKE CITY Annette Malen has been shopping at fabric and craft giant Joann for about 30 years.\r\nWhen news broke Sunday that the retailer is going out of business and shutting down all brick-and-m… [+3328 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "Chris Mason: Keir Starmer to meet Donald Trump with world history in flux - BBC.com",
      description:
        "Sir Keir Starmer's meeting with the US president comes at a pivotal moment for Europe, our political editor writes.",
      url: "https://www.bbc.com/news/articles/ckgdyqx1zy6o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/47d3/live/39d85570-f3d4-11ef-8b5c-03afff36a6ac.jpg",
      publishedAt: "2025-02-26T00:13:12Z",
      content:
        "A big moment and a big decision, ahead of a big meeting.\r\nThe government's announcement that it will crank up defence spending and shrivel the international aid budget amounts to a big shift in strat… [+2707 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Brent Lang",
      title:
        "Who Will Run ‘Star Wars’ After Kathleen Kennedy Leaves? One of Hollywood’s Hottest — and Hardest — Jobs Opens Up - Variety",
      description:
        'When Lucasfilm president Kathleen Kennedy exits, who will take over the future of "Star Wars"?',
      url: "https://variety.com/2025/film/news/kathleen-kennedy-star-wars-exit-who-runs-franchise-next-1236320393/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2015/12/kathleen-kennedy.jpg?w=1000&h=563&crop=1",
      publishedAt: "2025-02-25T23:59:00Z",
      content:
        "Who wants to call the shots on “Star Wars“?\r\nNo, really, because it’s kind of a thankless job. Of course, the intergalactic franchise is sacrosanct as a cultural institution, so the president of Luca… [+9486 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Laurie Kellman",
      title:
        "The White House says it 'will determine' which news outlets cover Trump, rotating traditional ones - The Associated Press",
      description:
        'The White House says its officials "will determine" which news outlets cover President Donald Trump. That departs from a century of tradition in which a pool of independent news organizations go where the chief executive does and holds him accountable on beha…',
      url: "https://apnews.com/article/trump-ap-news-outlets-ban-gulf-mexico-25c77f617418dd3ca2791af90b263a59",
      urlToImage:
        "https://dims.apnews.com/dims4/default/628b787/2147483647/strip/true/crop/6500x3656+0+339/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fdd%2Fa3%2F5ddd4cb610097727130ab59cac2a%2F581b447910684c1d83d83781eb634183",
      publishedAt: "2025-02-25T23:53:00Z",
      content:
        "The White House said Tuesday that its officials will determine which news outlets can regularly cover President Donald Trump up close a sharp break from a century of tradition in which a pool of inde… [+4772 chars]",
    },
    {
      source: {
        id: null,
        name: "PBS",
      },
      author: null,
      title:
        "Ukraine and U.S. agree on economic deal including rare earth materials, Ukrainian officials say - PBS NewsHour",
      description:
        "The officials, who were familiar with the matter, spoke on condition of anonymity because they were not authorized to speak publicly.",
      url: "https://www.pbs.org/newshour/world/ukraine-and-u-s-agree-on-economic-deal-including-rare-earth-materials-ukrainian-officials-say",
      urlToImage:
        "https://d3i6fh83elv35t.cloudfront.net/static/2025/02/wrap-5-1024x681.jpg",
      publishedAt: "2025-02-25T23:43:15Z",
      content:
        "KYIV, Ukraine (AP) Ukraine and the U.S. have reached an agreement on a framework for a broad economic deal that would include access to Ukraine’s rare earth minerals, three senior Ukrainian officials… [+2475 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "The Wall Street Journal",
      title:
        "21 Civil Servants Who Worked With Musk’s Government Reform Team Resign - The Wall Street Journal",
      description: null,
      url: "https://www.wsj.com/politics/policy/doge-elon-musk-employee-resignations-ec5c5f72",
      urlToImage: null,
      publishedAt: "2025-02-25T23:23:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Deadline",
      },
      author: "Armando Tinoco",
      title:
        "ShaVi Lewis Dies: ‘Project Runway’ Season 18 Designer Was 38 - Deadline",
      description:
        "ShaVi Lewis, a Project Runway contestant, has died. He was 38.",
      url: "http://deadline.com/2025/02/shavi-lewis-dead-project-runway-season-18-designer-1236301691/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2025/02/ShaVi-Lewis-project-runaway-bravo.jpg?w=1024",
      publishedAt: "2025-02-25T22:12:00Z",
      content:
        "ShaVi Lewis, a Project Runway contestant, has died. He was 38.\r\nLewis, who participated in Season 18 of the Bravo competition, died on February 24, according to his aunt Deidra DivaDoll Elkerson.\r\n“M… [+1520 chars]",
    },
    {
      source: {
        id: null,
        name: "The Cut",
      },
      author: "Emily Leibert",
      title:
        "Zoë Kravitz Is Really Grateful for Her Time With ‘Chan’ - The Cut",
      description:
        "In an interview with ‘Elle,’ Zoë Kravitz reminisced on her time making ‘Blink Twice’ with her muse, Channing Tatum, also known as ‘Chan.’",
      url: "http://www.thecut.com/article/zoe-kravitz-really-grateful-channing-tatum.html",
      urlToImage:
        "https://pyxis.nymag.com/v1/imgs/c03/1d1/46323b533732bd2b79b29e56a4f49994d3-zoe-kravitz-channing-tatum.1x.rsocial.w1200.jpg",
      publishedAt: "2025-02-25T22:07:19Z",
      content:
        "In October, some three years after falling in love on the set of Blink Twice, ZoëKravitz and Channing Tatumcalled off their engagement, breaking the hearts of hopeless romantics everywhere. In the mo… [+1976 chars]",
    },
    {
      source: {
        id: null,
        name: "Uscis.gov",
      },
      author: null,
      title: "Alien Registration Requirement - USCIS",
      description:
        "On Jan. 20, 2025, President Trump issued the Protecting the American People Against Invasion executive order which directed the Department of Homeland Security to ensure that aliens comply with their duty to register with the government under section 262 of t…",
      url: "https://www.uscis.gov/alienregistration",
      urlToImage:
        "https://www.uscis.gov/sites/default/files/images/social-media/OPA-SM_USCISonBlue_FB_1200x627_V1.png",
      publishedAt: "2025-02-25T22:02:11Z",
      content:
        "On Jan. 20, 2025, President Trump issued the Protecting the American People Against Invasion executive order which directed the Department of Homeland Security to ensure that aliens comply with their… [+5634 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Adithi Ramakrishnan",
      title:
        "Every planet of our solar system is lining up in the February night sky - The Associated Press",
      description:
        "Seven planets grace the sky at the end of February in what’s known as a planetary parade, though some will be difficult to spot. Venus, Mars and Jupiter are visible to the naked eye through the end of the month. Mercury and Saturn will be faint and close to t…",
      url: "https://apnews.com/article/seven-planets-parade-february-20cb0d141af5b958e46f136022104766",
      urlToImage:
        "https://dims.apnews.com/dims4/default/6a24f64/2147483647/strip/true/crop/2707x1523+0+141/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F95%2F95%2F120af2335a756a1bcb3e9062bbeb%2Fba9901f797114cf0a2af6cf2b3b263ba",
      publishedAt: "2025-02-25T22:02:00Z",
      content:
        "NEW YORK (AP) Seven planets grace the sky at the end of February in whats known as a planetary parade, though some will be difficult to spot with the naked eye.\r\nThese planetary hangouts happen when … [+1280 chars]",
    },
    {
      source: {
        id: "time",
        name: "Time",
      },
      author: "Sean Gregory",
      title:
        "Exclusive: After an Unparalleled Career, WNBA Star Diana Taurasi Announces Her Retirement - TIME",
      description:
        "In an exclusive interview with TIME, WNBA star and six-time Olympic gold medalist Diana Taurasi says she is retiring",
      url: "https://time.com/7261375/diana-taurasi-wnba-retirement-interview/",
      urlToImage:
        "https://api.time.com/wp-content/uploads/2025/02/diana-taurasi-lead.jpg?quality=85&w=1200&h=628&crop=1",
      publishedAt: "2025-02-25T22:00:10Z",
      content:
        "Diana Taurasi, the all-time leading scorer in WNBA history and a six-time Olympic gold medalist, usually starts preparing for her upcoming season on January 1. She gives herself four months to work o… [+17608 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Kaitlan Collins, Tierney Sneed",
      title: "White House reveals who DOGE acting administrator is - CNN",
      description:
        "Amy Gleason is the acting administrator of the US DOGE Service, the agency that houses the temporary Department of Government Efficiency, a White House official told CNN on Tuesday.",
      url: "https://www.cnn.com/2025/02/25/politics/amy-gleason-doge-acting-administrator/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/amy-gleason-linkedin.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2025-02-25T21:56:00Z",
      content:
        "Amy Gleason is the acting administrator of the US DOGE Service, the agency that houses the temporary Department of Government Efficiency, a White House official told CNN on Tuesday.\r\nThe announcement… [+2199 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Michael Wayland",
      title:
        "Lucid CEO steps down; EV maker plans to more than double production in 2025 - CNBC",
      description:
        "Lucid said Marc Winterhoff, currently the company's chief operating officer, has taken over as interim CEO.",
      url: "https://www.cnbc.com/2025/02/25/lucid-ceo-peter-rawlinson-steps-down-ev-maker-plans-to-double-production.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107420148-1716586096525-gettyimages-2154514894-js1_9845_axy5pfiz.jpeg?v=1740518047&w=1920&h=1080",
      publishedAt: "2025-02-25T21:20:42Z",
      content:
        "Brand new Lucid electric cars sit parked in front of a Lucid Studio showroom in San Francisco on May 24, 2024.\r\nElectric vehicle maker Lucid Group on Tuesday said CEO Peter Rawlinson has stepped down… [+3270 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.article,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ee1199b03eeb4cb2b7c4d95555f051c3`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ee1199b03eeb4cb2b7c4d95555f051c3&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };
  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ee1199b03eeb4cb2b7c4d95555f051c3&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  render() {
    return (
      <div className="container text-center d-flex flex-column align-items-center my-4 ">
        <h1>NewsMonkey- Top Headlines</h1>
        <div className="row mt-5 mb-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 mt-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    !element.urlToImage
                      ? "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EZILIMVUCBU55KMPPRQKTMSK2Y.JPG&w=1440"
                      : element.urlToImage
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
