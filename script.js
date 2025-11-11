// Build your project cards with DOM + loop + functions

function makeProjectCard(title, meta, text) {
  var card = document.createElement('article');
  card.className = 'card';

  var h3 = document.createElement('h3');
  h3.textContent = title;

  var metaWrap = document.createElement('p');
  var em = document.createElement('em');
  em.textContent = meta;
  metaWrap.appendChild(em);

  var body = document.createElement('p');
  body.textContent = text;

  card.appendChild(h3);
  card.appendChild(metaWrap);
  card.appendChild(body);
  return card;
}

function buildProjects() {
  var projects = [
    {
      t: 'VPN-Protected Network Project',
      m: 'OpenVPN • pfSense • Raspberry Pi ×3 • ZimaBoard',
      d: 'In my Penetration Testing class, I built a custom VPN protected network using three Raspberry Pis and a ZimaBoard. The setup used OpenVPN and pfSense to route traffic through Japan, providing full encryption and privacy. I configured each device to handle different roles and created a wireless access point so the network could be used for testing real world security scenarios.'
    },
    {
      t: 'Wireshark & SET Toolkit Exercises',
      m: 'Wireshark • Social-Engineer Toolkit',
      d: 'Gained experience using Wireshark to scan for vulnerabilities and analyze network traffic. I learned how to safely use the Social Engineer Toolkit to study how attackers might try to exploit systems and how to defend against them.'
    },
    {
      t: 'Coding & Scripting Projects',
      m: 'C# • Python • C++ • JavaScript',
      d: 'I built websites, a calculator, text adventure games, and a working Pong game from scratch. These projects built my debugging and problem-solving skills.'
    }
  ];

  var list = document.getElementById('projects-list');
  if (!list) return;

  for (var i = 0; i < projects.length; i++) {
    var p = projects[i];
    list.appendChild(makeProjectCard(p.t, p.m, p.d));
  }
}

// Run on load
buildProjects();
