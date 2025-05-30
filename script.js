const apps = [
    {
        name: 'App One ✅',
        url: 'https://example.com/app1',
        img: 'https://via.placeholder.com/100',
        descriptions: 'Updated May 2025'
    },
    {
        name: 'App Two ✅',
        url: 'https://example.com/app2',
        img: 'https://via.placeholder.com/100',
        descriptions: 'Latest Patch Included'
    },
];

const esigns = [
    {
        name: 'ESign A',
        url: 'https://example.com/esign1',
        img: 'https://via.placeholder.com/100',
        descriptions: 'Issued by Example Org'
    },
    {
        name: 'ESign B',
        url: 'https://example.com/esign2',
        img: 'https://via.placeholder.com/100',
        descriptions: 'Issued by Another Org'
    }
];

function renderSection(dataArray, containerId) {
    const container = document.getElementById(containerId);
    dataArray.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.descriptions}</p>
            <a href="${item.url}" target="_blank">Download</a>
        `;
        container.appendChild(card);
    });
}

renderSection(apps, 'apps-section');
renderSection(esigns, 'esigns-section');
