// Authored demo data for the "Why Reddit" section. Everything here is illustrative:
// fictional users, no real products, no engagement numbers.

export type Scenario = {
  query: string;
  sub: string;
  thread: {
    user: string;
    question: string;
    comments: { user: string; tag: "Experience" | "Objection" | "Practical tip"; text: string; replies: { user: string; text: string; badge?: string }[] }[];
  };
  ai: {
    question: string;
    /** ChatGPT-style answer: lead-in plus labelled bullets. */
    intro: string;
    points: { label: string; text: string }[];
    /** Claude-style answer: prose paragraphs. */
    prose: string[];
    /** Title of a second, non-Reddit source. */
    guide: string;
  };
};

export const scenarios: Scenario[] = [
  {
    query: "Best CRM for small startups reddit",
    sub: "startups",
    thread: {
      user: "six_person_sales",
      question: "Anyone using a CRM with a team of six? We need something simple without spending weeks setting it up.",
      comments: [
        {
          user: "seed_stage_sam", tag: "Experience",
          text: "We tried a few. Honestly, the biggest difference wasn't the feature list. It was how much setup the team actually had to do.",
          replies: [
            { user: "six_person_sales", text: "How long did setup take for the one you kept?" },
            { user: "seed_stage_sam", text: "An afternoon. The one we dropped took two weeks and still wasn't right." },
          ],
        },
        {
          user: "burnrate_ben", tag: "Objection",
          text: "Check what happens after the free tier. That's where a lot of tools become expensive.",
          replies: [{ user: "ops_olivia", text: "Seconding. Price it at the seat count you'll have in a year, not today." }],
        },
        {
          user: "pipeline_priya", tag: "Practical tip",
          text: "Also test the integrations before paying. That's what ended up being the deciding factor for us.",
          replies: [
            { user: "six_person_sales", text: "Which one mattered most?" },
            { user: "pipeline_priya", text: "Email sync. If reps have to log things by hand, they won't." },
          ],
        },
      ],
    },
    ai: {
      question: "What's the best CRM for a small startup?",
      intro: "For a small team, the right CRM depends less on features and more on how quickly your team will actually adopt it. Three things to weigh:",
      points: [
        { label: "Setup time", text: "Teams in public discussions often say setup effort mattered more than the feature list." },
        { label: "Cost after the free tier", text: "Check per-seat pricing at the team size you expect to reach." },
        { label: "Integrations", text: "Test email and calendar sync in a trial before committing." },
      ],
      prose: [
        "There isn't one best CRM for every small startup, but people who've been through the decision tend to point to the same checks.",
        "Setup effort comes up as the real differentiator, followed by what the price looks like once you outgrow the free tier, and whether the integrations you rely on hold up in a trial.",
      ],
      guide: "CRM pricing explained for small teams",
    },
  },
  {
    query: "Best applicant tracking system for startups",
    sub: "recruiting",
    thread: {
      user: "first_recruiter_in",
      question: "First recruiter at a 30-person startup. Do we need an ATS yet, or is a spreadsheet fine?",
      comments: [
        {
          user: "talent_tom", tag: "Experience",
          text: "A spreadsheet worked until we had three roles open at once. After that, candidates started slipping through.",
          replies: [
            { user: "first_recruiter_in", text: "We're about to open four. That answers that." },
          ],
        },
        {
          user: "lean_hiring", tag: "Objection",
          text: "Most ATS tools are built for companies ten times your size. You'll pay for workflows you never switch on.",
          replies: [
            { user: "talent_tom", text: "True, but interview scheduling alone saved me hours every week." },
            { user: "lean_hiring", text: "Fair. Just buy for the hiring you have, not the hiring in the pitch deck." },
          ],
        },
        {
          user: "people_ops_pat", tag: "Practical tip",
          text: "Get hiring managers to use it for a week during the trial. If they won't leave feedback in it, it doesn't matter which one you buy.",
          replies: [{ user: "first_recruiter_in", text: "Good test. Stealing this." }],
        },
      ],
    },
    ai: {
      question: "What's the best applicant tracking system for a startup?",
      intro: "Whether a startup needs an ATS, and which one, mostly comes down to hiring volume and who has to use it. Consider:",
      points: [
        { label: "When to switch", text: "Recruiters in public discussions describe spreadsheets breaking down once several roles are open at once." },
        { label: "Right-sized features", text: "Many platforms are designed for much larger teams, so compare plans by what you'll use." },
        { label: "Hiring-manager adoption", text: "Trial it with the managers who need to leave feedback in it." },
      ],
      prose: [
        "For an early-stage company, the more useful question is when an ATS starts paying for itself. Recruiters discussing this publicly often put the tipping point at several open roles running in parallel.",
        "From there, the advice is to avoid paying for enterprise workflows you won't use, and to test adoption with hiring managers before choosing.",
      ],
      guide: "ATS buying checklist for early-stage teams",
    },
  },
  {
    query: "Is [brand] actually worth it?",
    sub: "SaaS",
    thread: {
      user: "skeptical_buyer_",
      question: "Is [brand] actually worth it, or is it just good marketing? Looking for honest takes from people who pay for it.",
      comments: [
        {
          user: "year_one_user", tag: "Experience",
          text: "Used it for about a year. Solid at the core thing, weaker everywhere else. Worth it if that one thing is your bottleneck.",
          replies: [{ user: "skeptical_buyer_", text: "That's the kind of answer I was hoping for. Thanks." }],
        },
        {
          user: "ticket_number_9", tag: "Objection",
          text: "Support got slower once we were off the trial. Ask how support works on the plan you'd actually buy.",
          replies: [
            { user: "dana_at_brand", badge: "Disclosure: works at [brand]", text: "Fair criticism. I work here, so weigh this accordingly: support hours are listed per plan on our pricing page, and I'm happy to answer specifics." },
            { user: "ticket_number_9", text: "Appreciate you saying who you are. That's more useful than a sales reply." },
          ],
        },
        {
          user: "archive_digger", tag: "Practical tip",
          text: "Search this sub for older threads too. Opinions from two years ago and from last month can be very different.",
          replies: [],
        },
      ],
    },
    ai: {
      question: "Is [brand] worth paying for?",
      intro: "Opinions are mixed and depend on what you need it for. From public user discussions:",
      points: [
        { label: "Strongest at its core use", text: "Long-term users describe it as worth it when that core feature is your main bottleneck." },
        { label: "Support varies by plan", text: "Check what support is included on the plan you'd actually buy." },
        { label: "Recency matters", text: "Compare recent threads with older ones, since products and opinions change." },
      ],
      prose: [
        "It depends on the problem you're solving. People who pay for it tend to describe it as strong at its core job and less convincing outside it.",
        "One recurring concern is support after the trial period, so it's worth confirming what your plan includes. It also helps to read recent discussions alongside older ones before deciding.",
      ],
      guide: "[brand] plans and support compared",
    },
  },
  {
    query: "[Brand] vs [competitor] reddit",
    sub: "smallbusiness",
    thread: {
      user: "two_tabs_open",
      question: "Stuck between [brand] and [competitor]. Anyone here used both for more than a month?",
      comments: [
        {
          user: "switched_twice", tag: "Experience",
          text: "Used both. [Brand] is quicker to learn, [competitor] goes deeper on reporting. It depends which problem you actually have.",
          replies: [
            { user: "two_tabs_open", text: "Team is non-technical, so quicker to learn probably wins." },
          ],
        },
        {
          user: "five_person_shop", tag: "Objection",
          text: "Neither, honestly, if you're under five people. You might not need a dedicated tool yet.",
          replies: [
            { user: "switched_twice", text: "Agree with this more than I'd like to." },
          ],
        },
        {
          user: "export_first", tag: "Practical tip",
          text: "Export your data from both during the trial. How hard that is tells you a lot about lock-in.",
          replies: [{ user: "two_tabs_open", text: "Hadn't thought about getting data out. Adding it to the list." }],
        },
      ],
    },
    ai: {
      question: "[Brand] vs [competitor]: which should I choose?",
      intro: "Both are reasonable choices, and the better fit depends on your team. In user comparisons:",
      points: [
        { label: "Ease vs depth", text: "People who've used both describe one as quicker to learn and the other as deeper on reporting." },
        { label: "Team size", text: "Very small teams sometimes don't need a dedicated tool yet." },
        { label: "Data portability", text: "Try exporting your data during the trial to gauge lock-in." },
      ],
      prose: [
        "The comparison usually comes down to ease of use against depth. Users who've tried both describe one as faster to pick up and the other as stronger on reporting.",
        "Two other points come up: very small teams may not need either yet, and testing a data export during the trial is a quick way to judge lock-in.",
      ],
      guide: "Side-by-side feature comparison",
    },
  },
  {
    query: "Best project management tool for remote teams",
    sub: "remotework",
    thread: {
      user: "four_timezones",
      question: "Remote team across four time zones. Which project management tool actually keeps everyone in sync?",
      comments: [
        {
          user: "async_andy", tag: "Experience",
          text: "The tool mattered less than agreeing on one place for status updates. We switched twice before working that out.",
          replies: [
            { user: "four_timezones", text: "So the process was the problem, not the software?" },
            { user: "async_andy", text: "Mostly. The software just made it obvious." },
          ],
        },
        {
          user: "standup_skeptic", tag: "Objection",
          text: "Careful with anything that needs everyone online at once. Async-first features matter more than a nice board view.",
          replies: [{ user: "remote_since_15", text: "This. Comment threads on tasks beat live boards for us." }],
        },
        {
          user: "pilot_project_pm", tag: "Practical tip",
          text: "Run one real project in it for two weeks before rolling it out. Demo boards always look great.",
          replies: [],
        },
      ],
    },
    ai: {
      question: "What's the best project management tool for a remote team?",
      intro: "For distributed teams, how a tool handles asynchronous work matters more than its board layout. Worth checking:",
      points: [
        { label: "One source of truth", text: "Remote workers in public discussions say agreeing on where status lives mattered more than the tool." },
        { label: "Async-first features", text: "Prioritize task comments and updates over anything that needs everyone online together." },
        { label: "Pilot first", text: "Run a real project in it for a couple of weeks before a full rollout." },
      ],
      prose: [
        "Most mainstream tools can work for a remote team. What people who've done it emphasize is the working agreement around the tool: one place for status, and async updates by default.",
        "A practical suggestion that comes up is piloting a single real project for a couple of weeks before rolling anything out to the whole team.",
      ],
      guide: "Async collaboration features compared",
    },
  },
];
