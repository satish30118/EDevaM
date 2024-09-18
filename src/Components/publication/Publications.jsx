import React from "react";

const Publications = () => {
  const publication = [
    {
      id: 1,
      title:
        "D. Patel, A. Dharmesh, Y. Sharma, P. Rani, A. K. Sharma, Hybrid electrolyte with biomass-derived carbon host for high-performance aqueous Zn–S battery, Chemical Engineering Journal (2024), vol. 479, 147722",
    },
    {
      id: 2,
      title:
        "P. Kumar, NSM Reddy, A. Dharmesh, P. Rani, A. K. Sharma, In-situ hydrogen production and battery electrode materials from metal effluent and biomass, Chemical Engineering Journal (2024), vol. 480, 148070",
    },
    {
      id: 3,
      title:
        "Aakanksha, A. Sahoo, A. K. Sharma, Y. Sharma, Physics based modeling of LiFePO4 cathodes: effects of electrode parameters on cell performance during fast charging, Journal of Physics: Energy (2023), vol. 5 (4), 045013",
    },
    {
      id: 4,
      title:
        "D. Patel and A. K. Sharma, Minireview on Aqueous Zinc–Sulfur Batteries: Recent Advances and Future Perspectives, Energy & Fuels (2023), vol. 37 (15), 10897-10914",
    },
    {
      id: 5,
      title:
        "L. K. Singh, R. Kumar, A. K. Gupta, A. K. Sharma, S. Panchal, Computational study on hybrid air-PCM cooling inside lithium-ion battery packs with varying number of cells, Journal of Energy Storage (2023), vol. 67, 107649",
    },
    {
      id: 6,
      title:
        "A. Pathak, A. K. Sharma, A. K. Gupta, Systematic Lumped Modeling of all-Vanadium Redox Flow Batteries, Journal of the Electrochemical Society (2022), vol. 169, pp. 100533",
    },
    {
      id: 7,
      title:
        "L. K. Singh, A. K. Gupta, A. K. Sharma, Hybrid thermal management system for a lithium-ion battery module: Effect of cell arrangement, discharge rate, phase change material thickness and air velocity, , Journal of Energy Storage (2022), vol. 52 (B), pp. 104907",
    },
    {
      id: 8,
      title:
        "A. K. Sharma, K. Somasundaram, E. Birgersson, W. Tong, H.V. Nguyen, A. Fisher, A. S. Mujumdar, Scale analysis of electrochemical and thermal behaviour of a cylindrical spiral-wound lithium-ion battery, Electrochimica Acta (2021), vol. 400, pp. 139397",
    },
    {
      id: 9,
      title:
        "A. Pathak, A. K. Gupta, A. K. Sharma, Dimensional analysis of a flow-by porous electrode and demonstration to all-vanadium redox flow batteries thereon, Journal of Energy Storage (2021), vol. 44, pp. 103258",
    },
    {
      id: 10,
      title:
        "L. K. Singh, G. Mishra, A. K. Sharma, A. K. Gupta, A numerical study on thermal management of a lithium-ion battery module via forced-convective air cooling, International Journal of Refrigeration (2021), vol. 131, pp. 218-234",
    },
    {
      id: 11,
      title:
        "S. Bhushan, M. S. Rana, M. Bhandari, A. K. Sharma, H. Simsek, S. K. Prajapati, Enzymatic pretreatment of algal biomass has different optimal conditions for biogas and bioethanol routes, Chemosphere (2021), vol. 284, pp. 131264",
    },
    {
      id: 12,
      title:
        "Mamta, M. S. Rana, A. K. Sharma, J. V.Parambil, S. K. Prajapati, Potential of reverse osmosis reject water as a growth medium for the production of algal metabolites–A state-of-the-art review, Journal of Water Process Engineering (2021), vol. 40, pp. 101849",
    },
    {
      id: 13,
      title:
        "A. K. Sharma, S. Basu, K. S. Hariharan, S. P. Adiga, S. M. Kolake, T. Song, Y. Sung. A closed form reduced order electrochemical model for Li-ion cells, Journal of the Electrochemical Society (2019), vol. 166, pp. A1197-1210",
    },
    {
      id: 14,
      title:
        "S. K. Murthy, A. K. Sharma, C. Choo, E. Birgersson. Analysis of concentration overpotential in an all-vanadium redox flow battery, Journal of the Electrochemical Society (2018), vol. 165, pp. A1746-A175",
    },
    {
      id: 15,
      title:
        "A. K. Sharma, K. Ahmed, and E. Birgersson. Nernst voltage losses in planar fuel cells caused by changes in chemical composition: effects of operating parameters, Ionics, Springer (2018), vol. 24, pp. 2047-2054",
    },
    {
      id: 16,
      title:
        "A. K. Sharma, E. Birgersson, F. Pan, and Q. Wang. Analysis of a validated mathematical model for a redox-flow lithium-ion battery system, Electrochimica Acta (2017), vol. 247, pp. 183-192",
    },
    {
      id: 17,
      title:
        "A. K. Sharma, E. Birgersson, F. Pan, and Q. Wang. Mathematical modeling and experiments of half-cell redox flow lithium ion battery system, Electrochimica Acta (2016), vol. 204, pp.1-8",
    },
    {
      id: 18,
      title:
        "A. K. Sharma, and E. Birgersson. Validity and scalability of an asymptotically reduced single channel model for full-size catalytic monolith converters, Applied Mathematics and Computation (2016), vol. 281, pp. 186-198",
    },
    {
      id: 19,
      title:
        "A. K. Sharma, C. Y. Ling, M. Vynnycky, E. Birgersson, and M. Han. Verified reduction of dimensionality for an all-vanadium redox flow battery model, Journal of Power Sources (2015), vol. 279, pp. 345-350",
    },
    {
      id: 20,
      title:
        "A. K. Sharma, E. Birgersson, and M. Vynnycky. Towards computationally-efficient modeling of transport phenomena in three-dimensional monolithic channels, Applied Mathematics and Computation (2015), vol. 254, pp. 392-407",
    },
    {
      id: 21,
      title:
        "A. K. Sharma, M. Vynnycky, C.Y. Ling, E. Birgersson, and M. Han. The quasi-steady state of all-vanadium redox flow batteries: A scale analysis, Electrochimica Acta (2014), vol. 147, pp. 657-662",
    },
    {
      id: 22,
      title:
        "A. K. Sharma and E. Birgersson. On modifying the condition for the local current density decoupling in fuel cell stacks for moderate perturbations, Electrochimica Acta (2014), vol. 142, pp. 187-190",
    },
    {
      id: 23,
      title:
        "A. K. Sharma and E. Birgersson. Computationally-efficient simulation of transport phenomena in fuel cell stacks via electrical and thermal decoupling of the cells, Fuel Cells (2014), vol. 14, pp. 906-913",
    },
    {
      id: 24,
      title:
        "A. K. Sharma, E. Birgersson and S. H. Khor. Computationally-efficient hybrid strategy for mechanistic modeling of fuel cell stacks, Journal of Power Sources (2014), vol. 247, pp. 481-488",
    },
    {
      id: 25,
      title:
        "A. K. Sharma, E. Birgersson, and M. Vynnycky. An aggregate measure for the local current density coupling in fuel cell stacks, Journal of the Electrochemical Society (2013), vol. 160, pp. F1237-1240",
    },
    {
      id: 26,
      title:
        "A. K. Sharma, E. Birgersson, M. Vynnycky and H. Ly. On the interchangeability of potentiostatic and galvanostatic boundary conditions for fuel cells, Electrochimica Acta (2013), vol. 109, pp. 617-622",
    },
    {
      id: 27,
      title:
        "M. Vynnycky, A. K. Sharma, and E. Birgersson. A finite element method for the weakly compressible parabolized steady 3D Navier Stokes equations in a channel with a permeable wall, Computers and Fluids (2013), vol. 81, pp. 152-161",
    },
    {
      id: 28,
      title:
        "A. K. Sharma, V. Agarwal, A. K. Das, S. Ghosh, and P. K. Das. Conduction in composite slabs: reliability of 1-D and 2-D calculations, Energy and Buildings (2013), vol. 65, pp. 242-247",
    },
  ];
  return (
    <>
      <div className="a-bottom">
        <h2>Our Publications</h2>
        <div className="a-b-1">
          {publication.map((data) => {
            return <div className="a-b-2" key={data.id} data-aos="fade-up">{data.title}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Publications;
