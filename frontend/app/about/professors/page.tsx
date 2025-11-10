export default function ProfessorsPage() {
  const professors = [
    {
      name: "Lucy Ferriss",
      title: "President of the Board",
      description: "Lucy Ferriss is a novelist, Writer in Residence emerita from Trinity College, and co-founder of Afghan Female Student Outreach. The author of a dozen books of fiction and nonfiction, she did research for her work among the Pashtun area of northwest Pakistan. She has been active with a number of charitable organizations, including the Authors Guild, Jewish Family Services, Planned Parenthood, the Brigid Foundation, and Women for Women International. She holds a Ph.D. from Tufts University. In addition to her work with AFSO, she teaches Afghan refugees in the United States."
    },
    {
      name: "Saleh Keshawarz",
      title: "Vice-President",
      description: "Saleh Keshawarz is Department Chair and Program Director for Civil Engineering at the University of Hartford. Dr. Keshawarz earned his Ph.D. in Civil Engineering from the University of Oklahoma and a B.S. in Civil Engineering from Kabul University. For four years, he directed a World Bank and USAID funded partnership between the University of Hartford and Herat University in Afghanistan. The partnership was focused on enhancing engineering education at Herat University through providing masters degree scholarship, curriculum development, and laboratory improvement."
    },
    {
      name: "Judy Lewis",
      title: "Secretary",
      description: "Judy Lewis is a public health sociologist and professor emerita at the University of Connecticut. She focuses on maternal, child and adolescent health, and health care in low resource countries. She is President of the Grand' Anse Health & Development Association and Board Chair of Women and Health Together for the Future. In 2018, she received The Carl Taylor Lifetime Achievement Award in International Health, American Public Health Association, International Health Section to honor the visionaries and leaders in APHA who have shaped the direction of International Health and in 2023 she received the Gordon-Wyon Award for Community-Oriented Public Health, Epidemiology and Practice. Prof. Lewis has worked with hundreds of students on global health projects."
    },
    {
      name: "J. Donald Moon",
      title: "Treasurer",
      description: "J. Donald Moon is the Zilkha Professor in the College of Social Studies, emeritus, at Wesleyan University. He is the author of numerous books and articles on political theory, especially the political philosophy of John Rawls. He is the author of Constructing Community: Moral Pluralism and Tragic Conflicts. He has taught English to immigrants from Afghanistan, Congo, and Somalia."
    },
    {
      name: "Henry Patterson",
      title: "Board Member",
      description: "Henry Patterson studied adult development and counseled Harvard College students, unusual preparation for a career as a restaurateur. The founder and owner/operator of a group of six Boston area restaurants, he employed over a thousand young adults who won the company nine Best of Boston Awards for various Italian specialties during the fifteen years of his leadership. Patterson is a critic of the American business community's prioritization of short-term profit, advocating an alternative focus on job quality, team development and slow, controlled growth. After selling Bel Canto, he remained in foodservice as an advisor to other operators and as a mentor to novice entrepreneurs. His foodservice incubator in Union Square, Somerville, houses five restaurants and a cocktail bar. He resides in Concord, Massachusetts."
    },
    {
      name: "Matt Powers",
      title: "Board Member",
      description: "Matt Powers is currently CEO of Industrial Control Solutions LLC, which includes portfolio companies of Whitman Controls, Thomas Products, and Load Controls. He previously served in commercial roles at Fortive and Gilbarco Veeder-Root, and served as a Blackhawk helicopter pilot in the US Army for ten years. Matt holds degrees from the United States Military Academy, West Point (BS), the University of London School of Oriental and African Studies (MA), Queen's University of Belfast (MA), and Yale University (Executive MBA). He is married with two children, and the family's passion is exploring the world for the most unique food, drinks, and experiences, with 87 countries already visited."
    },
    {
      name: "Bobbie (Barbara) Smolow",
      title: "Board Member",
      description: "Bobbie (Barbara) Smolow is the retired Library Director at Sarah Lawrence College. She served on the initial committee to develop the 4-college Consortium on Forced Migration, Displacement, and Education. She participated in the Bosnian Student Project bringing displaced students from the Balkans to American schools. She serves as the AFSO research librarian."
    },
    {
      name: "Amran Fatih",
      title: "Executive Director",
      description: "Amran Fatih has extensive expertise in program policy, management, and strategic planning for government, civil society, and the private sector. He has served as a senior specialist at the ombuds office of the President of the Islamic Republic of Afghanistan. He contributed significantly to civil society programs funded by the National Endowment for Democracy in Afghanistan, focusing on democratic values, education, transparency, and accountability."
    },
    {
      name: "Katy Masuga",
      title: "Academic Administrator",
      description: "Katy Masuga has extensive experience in managing international education programs. She holds a PhD in Comparative Literature from the University of Washington with a joint PhD in Theory and Criticism with a core background in philosophy and in modernism. She is the author of four books including The Secret Violence of Henry Miller (Cambridge UP, 2011) and The Blue of Night (Spuyten Duyvil, 2020). She has also completed graduate work at the University of Freiburg, Humboldt University in Berlin, and the Sorbonne in Paris. She currently lives and teaches in France. She is co-founder of Sappho Road, a women's knowledge exchange in English based in France and founder of The Library writing residency in the Fontainebleau forest, just south of Paris."
    },
    {
      name: "Irene Burns",
      title: "Student Affairs Coordinator",
      description: "Irene Burns brings over two decades of experience in international development, with a focus on SME growth, trade, and institutional capacity building in developing and post-conflict regions. From 2006 to 2012, she led USAID-funded programs in Afghanistan, collaborating with local and international stakeholders to implement sustainable economic initiatives. Irene holds a BA in Political Science and an MBA from Iona University. Her global fieldwork and academic background inform her commitment to cross-cultural exchange, education, and public-private collaboration."
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#135f5c' }}>Our Professors</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the dedicated team of professors and administrators who make AFSO's mission possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {professors.map((professor, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">{professor.name}</h2>
            <p className="text-lg font-medium mb-4" style={{ color: '#135f5c' }}>{professor.title}</p>
            <p className="text-gray-700 leading-relaxed">{professor.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

