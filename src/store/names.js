export const names = [
    'Ballance', 'Noble', 'Elsie', 'Dowdeswell', 'Bonnin', 'Laugheran', 'Garton', 'Zolini', 'Fraczak', 'Blant',
    'Eddoes', 'Ferres', 'Guiducci', 'Locks', 'Travers', 'Gallie', 'Hearse', 'Heggadon', 'Grimble', 'Fillis',
    'Pittson', 'Allcoat', 'Bastick', 'Jacobsen', 'Monk', 'Doyle', 'Bartolini', 'MacDaid', 'Bayly', 'Ribchester',
    'Sheer', 'Briggdale', 'Wynch', 'Elecum', 'Elkin', 'Dent', 'Glancy', 'Eskell', 'Troy', 'Luckwell',
    'Douse', 'Bennedick', 'Muzzullo', 'Cutler', 'Devanney', 'Cossington', 'Bruins', 'Laidlow', 'McCritichie', 'Hatchette',
    'Crossgrove', 'Quickfall', 'Cuckoo', 'MacGinney', 'Carus', 'De Lacey', 'Inggall', 'Wheal', 'Shoulder', 'Ruusa',
    'Rawsthorn', 'Staining', 'Veart', 'Lightwood', 'Flowerden', 'Darrell', 'Riquet', 'Lindstedt', 'De Meis', 'Edmead',
    'Kitlee', 'Rishman', 'Deener', 'Bissex', 'Signori', 'Luis', 'Khadir', 'Drohan', 'Lias', 'Boffey',
    'Ondrus', 'Danhel', 'Spikeings', 'Bartolacci', 'Clues', 'Victory', 'Dalgarnocht', 'Potteridge', 'Ciciari', 'Scotney',
    'MacSporran', 'Benettelli', 'Plaster', 'Bouette', 'Nelane', 'Vinson', 'Mancell', 'Scrivener', 'Ussher', 'Pledge',
]

export function getRosters() {
    let useNames = [...names]
    let roster = [[], []]
    for (let j = 0; j <= 1; j++) {
        for (let i = 0; i <= 8; i++) {
            roster[j].push({
                name: useNames.splice(Math.floor(Math.random() * useNames.length - 1), 1)[0],
                actions: []
            })
        }
    }
    return roster
}
