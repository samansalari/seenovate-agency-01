"use client";
import "./CTACard.css";
import Button from "../Button/Button";
import { MdArticle } from "react-icons/md";
import Copy from "../Copy/Copy";

const CTACard = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-copy">
          <div className="cta-col">
            <Copy animateOnScroll={true}>
              <p className="sm">Crafting Digital Worlds with a bit of mischief</p>
            </Copy>
          </div>

          <div className="cta-col">
            <Copy animateOnScroll={true}>
              <p className="lg">
              We build visuals, stories, and systems for people who like
              their creativity a little unpredictable.
              </p>
            </Copy>

            <Button
              animateOnScroll={true}
              delay={0.25}
              variant="dark"
              href="/contact"
            >
              Drop your portfolio
            </Button>
          </div>
        </div>

        <div className="cta-card">
          <div className="cta-card-copy">
            <div className="cta-card-col">
              <Copy animateOnScroll={true}>
                <h3>Secret Department</h3>
              </Copy>
            </div>

            <div className="cta-card-col">
              <Copy animateOnScroll={true}>
                <p>
                  We like to think we build order out of chaos, but it’s usually
                  the other way around. Every project starts as a mess of
                  sketches and motion tests.
                </p>

                <p>
                  If something feels too polished, we probably broke it on
                  purpose and rebuilt it slightly wrong, just enough to feel
                  human.
                </p>
              </Copy>

              <Button
                animateOnScroll={true}
                delay={0.25}
                variant="light"
                icon={MdArticle}
                href="/studio"
              >
                Visit the studio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACard;
