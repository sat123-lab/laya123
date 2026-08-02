import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/layouts/MainLayout";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import { mockPrograms } from "@/services/api";
import { referenceProgramImages } from "@/assets/referenceAssets";

const Programs = () => (
  <>
    <Helmet>
      <title>What We Do | LAYA – Resource Center for Adivasis</title>
      <meta name="description" content="Explore LAYA's program areas: Adivasi rights, herbal health care, sustainable resource management, lifelong learning, and climate action." />
    </Helmet>
    <MainLayout>
      <PageHero
        title="Program Areas"
        subtitle="Integrated development programs rooted in Adivasi knowledge systems"
        image={referenceProgramImages[2]}
        imageAlt="LAYA programs in action"
      />

      <section className="laya-section pb-20 md:pb-28">
        <div className="container-narrow mx-auto laya-panel-solid p-6 md:p-10 lg:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPrograms.map((program, i) => (
              <ProgramCard key={program.id} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  </>
);

export default Programs;
