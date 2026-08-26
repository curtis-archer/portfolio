import { BeforeAfterSlider } from '../components/BeforeAfterSlider'
import { Nav } from '../components/Nav'
import './CompetitiveIntelligencePage.css'
import './DataVisualizationsPage.css'
import './CheckoutRedesignPage.css'

const ASSET = '/assets/checkout'
const TREND_DOWN = `${ASSET}/trend-down.svg`

function checkoutAsset(file: string) {
  return `${ASSET}/${encodeURIComponent(file)}`
}

function ImpactMetrics({ labelledBy }: { labelledBy?: string }) {
  return (
    <div className="case-study-impact" role="group" aria-labelledby={labelledBy}>
      <div className="case-study-impact-item">
        <div className="case-study-impact-value-block">
          <p className="case-study-impact-value">7</p>
          <div className="case-study-impact-badge">
            <img src={TREND_DOWN} alt="" width={18} height={18} />
            <span className="case-study-impact-badge-text">82%</span>
          </div>
        </div>
        <p className="case-study-label">Weekly pricing confusion tickets</p>
      </div>
      <div className="case-study-impact-item">
        <div className="case-study-impact-value-block">
          <p className="case-study-impact-value">10%</p>
          <div className="case-study-impact-badge">
            <img src={TREND_DOWN} alt="" width={18} height={18} />
            <span className="case-study-impact-badge-text">50%</span>
          </div>
        </div>
        <p className="case-study-label">7-day churn</p>
      </div>
    </div>
  )
}

export function CheckoutRedesignPage() {
  return (
    <div className="page">
      <Nav />
      <article className="case-study">
        <header className="case-study-intro">
          <div className="case-study-intro-inner">
            <div className="case-study-header">
              <h1 className="case-study-title">
                Reducing Churn by Improving Trust
              </h1>
              <p className="case-study-subtitle">
                2024&nbsp;&nbsp;|&nbsp;&nbsp;Jungle Scout Catalyst
              </p>
            </div>

            <div className="case-study-details">
              <aside className="case-study-meta">
                <div className="case-study-block">
                  <p className="case-study-label">My Role</p>
                  <p className="case-study-text">Lead Product Designer</p>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Timeline</p>
                  <p className="case-study-text">1 Month</p>
                </div>
              </aside>

              <div className="case-study-copy">
                <div className="case-study-block">
                  <p className="case-study-label">Background</p>
                  <p className="case-study-text">
                    Jungle Scout Catalyst provides marketplace intelligence to
                    help Amazon sellers make well-informed decisions about
                    product innovation or listing SEO.
                  </p>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Description</p>
                  <p className="case-study-text">
                    After learning about the quantity of ‘pricing confusion’
                    tickets, I led data analysis and design and proposed changes
                    to our checkout flow that dramatically reduced pricing
                    confusion tickets and 7-day churn.
                  </p>
                </div>
              </div>
            </div>

            <ImpactMetrics />
          </div>
        </header>

        <section
          className="case-study-gallery case-study-gallery--lead"
          aria-label="Before and after"
        >
          <div className="case-study-gallery-inner">
            <div className="case-study-gallery-row case-study-gallery-row--focus">
              <div className="case-study-media case-study-media--focus case-study-media--checkout">
                <BeforeAfterSlider
                  beforeSrc={`${ASSET}/Before.png`}
                  afterSrc={`${ASSET}/After.png`}
                  beforeAlt="Checkout before redesign"
                  afterAlt="Checkout after redesign"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="case-study-story">
          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Research &amp; Discovery</h2>

            <h3 className="case-study-story-subtitle">Data Analysis</h3>
            <p className="case-study-text">
              The first thing I did was to get the count of these ‘price
              confusion’ tickets and then talk to some Customer Support team
              members about how these tickets usually result. I quickly learned
              how big the problem is and impactful it is to our bottom line.
            </p>
            <div className="case-study-data-split">
              <div className="case-study-data-copy">
                <p className="case-study-text">Here’s what I learned:</p>
                <p className="case-study-text">
                  <strong>Pricing Confusion leading to mistrust, then churn, then a
                  refund.</strong>
                </p>
                <p className="case-study-text">
                  <strong>31%</strong> of CS Tickets were labeled ‘pricing
                  confusion’.
                </p>
                <p className="case-study-text">
                  <strong>98%</strong> of pricing confusion tickets lead to a
                  churned customer within 7 days, resulting in a full refund.
                </p>
              </div>
              <div className="case-study-story-media case-study-story-media--checkout case-study-story-media--churn">
                <img
                  src={checkoutAsset('Churn-data.png')}
                  alt="Bar chart comparing pricing confusion tickets with tickets that led to a full refund"
                  className="case-study-story-image"
                  width={760}
                  height={528}
                />
              </div>
            </div>
          </section>

          <section className="case-study-story-block">
            <h3 className="case-study-story-subtitle">Design Analysis</h3>

            <div className="case-study-issue-heading">
              <p className="case-study-text">
                <strong>Issue 1 - Pricing Clarity</strong>
              </p>
              <p className="case-study-text">
                <em>Heuristic: Visibility of system status</em>
              </p>
            </div>
            <p className="case-study-text">
              Like many other SaaS products, our pricing page defaults to the
              annual price while displaying a larger monthly breakdown. While
              this is a common pattern, it makes the user’s actual financial
              commitment less obvious.{' '}
              <strong>
                The interface should make important information, such as billing
                frequency and the amount charged, immediately visible before a
                user makes a decision.
              </strong>{' '}
              This lack of clarity made it easy to select a yearly plan when you
              thought you were signing up for a monthly subscription.
            </p>
            <div className="case-study-story-media case-study-story-media--checkout case-study-story-media--marketing">
              <img
                src={checkoutAsset('Marketing.png')}
                alt="Pricing page with annual billing totals that are small and easy to miss"
                className="case-study-story-image"
                width={1600}
                height={1054}
              />
            </div>
          </section>

          <section className="case-study-story-block">
            <div className="case-study-issue-heading">
              <p className="case-study-text">
                <strong>Issue 2 - Checkout Communication</strong>
              </p>
              <p className="case-study-text">
                <em>Heuristic: Recognition rather than recall</em>
              </p>
            </div>
            <p className="case-study-text">
              Once users clicked on a plan they were interested in, the checkout
              communication was unclear, and it was easy to miss the actual
              amount they would pay. Users shouldn’t have to remember which plan
              or billing option they selected on the previous screen; the
              checkout should clearly reinforce those details at checkout. This
              directly contributed to a frequent issue in our support tickets:
              customers not realizing they had purchased a yearly subscription.
            </p>
            <div className="case-study-story-media case-study-story-media--checkout case-study-story-media--comms">
              <img
                src={checkoutAsset('Comms-Issue.png')}
                alt="Old checkout order summary with the purchase amount easy to miss"
                className="case-study-story-image"
                width={1600}
                height={880}
              />
            </div>
          </section>

          <section className="case-study-story-block">
            <div className="case-study-issue-heading">
              <p className="case-study-text">
                <strong>Issue 3 - CTA Clarity</strong>
              </p>
              <p className="case-study-text">
                <em>
                  Heuristics: Error prevention + Match between system and real
                  world
                </em>
              </p>
            </div>
            <p className="case-study-text">
              After entering their payment details, the CTA reads “Create Your
              Account.” This doesn&apos;t accurately communicate what happens
              when the user clicks it. Are they simply creating an account, or
              are they about to be charged? The language of an action should
              accurately reflect its consequence, particularly when that action
              has financial implications. Making the charge explicit in the CTA
              would help prevent users from unknowingly completing a purchase.
            </p>
            <div className="case-study-story-media case-study-story-media--checkout case-study-story-media--cta">
              <img
                src={checkoutAsset('CTA-Issue.png')}
                alt="Checkout form with a Create Your Account button that does not mention payment"
                className="case-study-story-image"
                width={1604}
                height={884}
              />
            </div>
          </section>

          <section className="case-study-story-block">
            <div className="case-study-issue-heading">
              <p className="case-study-text">
                <strong>Issue 4 - Craft &amp; Consistency</strong>
              </p>
              <p className="case-study-text">
                <em>Heuristic: Consistency and standards</em>
              </p>
            </div>
            <p className="case-study-text">
              While not necessarily a direct cause of CS tickets or 7-day churn,
              the overall polish and craft of the checkout experience did not
              align with our current design standards or design system.
              Consistency across an experience helps users build familiarity and
              confidence in the product. As a designer who prides myself on
              maintaining a high bar for craft, I was excited to bring the
              checkout experience up to the same standard as the rest of the
              product.
            </p>
            <div className="case-study-story-media case-study-story-media--checkout case-study-story-media--old">
              <img
                src={checkoutAsset('Old Checkout.png')}
                alt="Full old checkout page with outdated visual style"
                className="case-study-story-image"
                width={1600}
                height={1288}
              />
            </div>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Challenge</h2>
            <p className="case-study-text">
              How might we reduce CS tickets by improving transparency within
              the checkout flow without impacting conversion rates?
            </p>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Design Exploration</h2>
            <p className="case-study-text">
              I explored several options to improve checkout clarity and landed
              on three.
            </p>
          </section>

          <section className="case-study-story-block">
            <h3 className="case-study-story-option">Option 1</h3>
            <p className="case-study-text">
              The first option was the most minor update. We would leave the
              main checkout UI alone and not update it to match our new UI
              standards, but we would enhance the plan information detail to
              improve clarity.
            </p>
            <div className="case-study-story-media case-study-story-media--checkout case-study-story-media--option1">
              <img
                src={checkoutAsset('Option 1.png')}
                alt="Option 1 checkout with clearer plan information on the existing UI"
                className="case-study-story-image"
                width={1600}
                height={1044}
              />
            </div>
          </section>

          <section className="case-study-story-block">
            <h3 className="case-study-story-option">Option 2</h3>
            <p className="case-study-text">
              The second option was to improve checkout clarity by aligning the
              CTA copy with the actual consequences of taking the action, moving
              the total amount due today closer to the final action, and
              offering the user the opportunity to recover from an error by
              toggling the billing period they actually meant to purchase. This
              option also takes the opportunity to update the base checkout UI
              to match our new UI standards.
            </p>
            <div className="case-study-story-media case-study-story-media--checkout case-study-story-media--option2">
              <img
                src={checkoutAsset('Option 2.png')}
                alt="Option 2 redesigned checkout with billing toggle and updated UI"
                className="case-study-story-image"
                width={1600}
                height={1068}
              />
            </div>
          </section>

          <section className="case-study-story-block">
            <h3 className="case-study-story-option">Option 3</h3>
            <p className="case-study-text">
              The third option was to move away from our internal checkout and
              switch to the Stripe checkout. The marketing team has tested the
              Stripe checkout in the past; however, we saw a quick drop in
              conversion rate. The test ended too quickly, and we were unable to
              determine whether it affected the number of price confusion
              tickets.
            </p>
            <div className="case-study-story-media case-study-story-media--checkout case-study-story-media--stripe">
              <img
                src={checkoutAsset('Stripe.png')}
                alt="Stripe hosted checkout as a third option"
                className="case-study-story-image"
                width={1600}
                height={1104}
              />
            </div>
            <p className="case-study-text">
              Because multiple teams own the checkout flow and its metrics, I
              wrote a proposal document to gain alignment with all interested
              departments: Product, Marketing, and Customer Support.
            </p>
            <div className="case-study-story-media case-study-story-media--checkout case-study-story-media--proposal">
              <img
                src="/assets/Data-visualizations/Proposal.png"
                alt="Q2 Pricing and Checkout Proposals document outlining billing confusion and testing goals"
                className="case-study-story-image"
                width={1600}
                height={1104}
              />
            </div>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Moving Forward</h2>
            <p className="case-study-text">
              After presenting the proposal to the Product, Marketing, and
              Customer Support teams, we decided to test option 2. From a
              feasibility standpoint, updating the entire UI required little
              engineering effort, and we had more control and a better ability
              to improve our communication than we did with Stripe Checkout.
            </p>
            <p className="case-study-text">
              We also decided not to move forward with any marketing site
              changes to ensure we can truly measure the impact of this change.
            </p>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Final Deliverable</h2>
            <div className="case-study-story-media case-study-story-media--checkout case-study-story-media--final-checkout">
              <img
                src={checkoutAsset('Checkout- FInal.png')}
                alt="Final redesigned checkout with plan toggle, total due today, and Pay Yearly CTA"
                className="case-study-story-image"
                width={1600}
                height={1041}
              />
            </div>
            <div className="case-study-final-split">
              <div className="case-study-story-media case-study-story-media--checkout case-study-story-media--detail">
                <img
                  src={checkoutAsset('Small-Detail.png')}
                  alt="Close-up of billing frequency toggle and Pay Yearly call to action"
                  className="case-study-story-image"
                  width={784}
                  height={874}
                />
              </div>
              <div className="case-study-final-copy">
                <p className="case-study-text">
                  A few small design details that led to improved clarity.
                </p>
                <p className="case-study-text">
                  First, after a user selects a plan on the marketing site, we
                  clearly indicate whether they have selected a monthly or yearly
                  plan and offer the option to quickly toggle to their intended
                  billing frequency, ensuring they can recover from an error.
                </p>
                <p className="case-study-text">
                  Second, at the bottom, clearly communicate what they owe today,
                  and change the copy in the CTA to reflect the action that is
                  about to be taken.
                </p>
              </div>
            </div>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title" id="checkout-outcome">
              Outcome &amp; Impact
            </h2>
            <ImpactMetrics labelledBy="checkout-outcome" />
            <p className="case-study-text">
              This change to checkout flow was a resounding success. We saw a
              sustained reduction in ‘pricing confusion’ tickets (-82%), dropping
              from ~39/week to 7/week, and also a 50% drop in our 7-day churn
              numbers from ~20% to ~10%.
            </p>
            <p className="case-study-text">
              Not only did we reduce support tickets and 7-Day Churn, but
              conversion was not impacted, resulting in retaining much more of
              the dollars that were coming in the door every week.
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
