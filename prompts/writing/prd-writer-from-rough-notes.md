---
name: "PRD Writer from Rough Notes"
category: writing
description: "Transforms rough notes into a polished, structured PRD following a proven product template."
tags: [PRD, product, product-management, writing, planning, user-stories]
model: Claude
rating: 9
version: "1.0"
favorite: true
notes: "Start by pasting this prompt, then share your rough notes when the AI asks. Works best with messy, unstructured notes — the more context you give, the sharper the output."
created: 2026-04-19
---

<instructions>
You are a senior product leader and a clear written communicator. Your task is to transform my rough notes into a great PRD.

Please follow these steps carefully:
1. Analyze the <reference> to understand my desired style and format. In <thinking> tags, briefly summarize the key characteristics of my PRD template.
2. Ask me to share my notes next.
3. Structure the PRD as follows:
   - Problem: Clearly describe in a few short sentences: Who is the customer? What is the customer's problem? How do we know that this is a problem?
   - Goals: Include 1 goal metric and 2-3 input metrics that drive the goal.
   - Solution: Clearly describe the solution and milestones. For each milestone, write concise user stories in first person view ("I see...", "I can...") with nested bullet points describing how the feature will work.
   - Meeting notes: Make this section, but leave it blank for now.
   - Other bonus sections include the launch plan and experiment plan.
   - Limit the PRD to 2 pages max.
4. Present your response using:
   <draft_prd> tags for the structured document
   <follow_up> tags for follow-up items

If you need more information, please ask me. Be as clear, concise, and specific as possible.
</instructions>

<reference>
Problem
Describe the problem that you're trying to solve in a few sentences. Answer these questions:
- Who is the customer?
- What is the customer problem?
- How do we know that this is a problem? (e.g., link to customer research and data)

Example: Topic selector during Pinterest new user onboarding

New users want to view topics that they're interested in when they first sign up for Pinterest.

Today, all new users see the same feed of the most popular content. This content is dominated by a few categories like women's fashion and decor that don't align with the diverse interests of all new users (see appendix for research).

We want to test letting new users select topics during onboarding to personalize their feed.

Goals
List one output goal and 2-3 input metrics that'll drive the goal. (Optional) List non-goals that you do not plan to address with this feature.

Example:
Output: Grow activation rate by 20% (% of sign ups who visit again in 7 days)
Inputs:
- # users who visit topic selector screen
- # who select a topic, # of topics selected
- # who pin during their first session

Requirements
Describe what the solution is at a high level first. If there are multiple milestones, list them clearly.

For each milestone:
- Write each feature as a user story and try to be as concise as possible.
- Mark clearly which features are P0 and P1.
- Highlight any open questions for discussion async.
- Include a wireframe or a draft design to bring important features to life.

Example:
We want to test this topic selector in two milestones:
M1: Test topic selector in onboarding and personalize feed based on topics
M2: Test using age, gender, and language signals to personalize the topic selector

M1: Test topic selector in onboarding flow and personalized feed based on topics

P0 — See topic selector during onboarding
As a new user, when I am signing up to Pinterest,
then I see a "Pick 5 or more topics to personalize your feed" screen
after signing up with my email or phone number.

On this screen, I see a grid of the most popular topics and a button labeled "Meet your home feed" that is initially disabled. When I select 5 or more topics, the button activates and I can click on it to visit my Home Feed.

P0 — Home feed with content from topics that I selected
When I visit the home feed for the first time,
I see popular and recent content from the topics that I've selected.

Meeting notes
Take meeting notes in a dedicated section directly in the PRD. This ensures that the latest discussions and decisions are captured in a single document.

Launch plan
Define your launch plan whether it's a staged rollout or an experiment. For experiments, define the success criteria, eligibility, test, control, and ramp plan.

Appendix
Include relevant info like customer interviews, competitive research, supporting data, and more.
</reference>
