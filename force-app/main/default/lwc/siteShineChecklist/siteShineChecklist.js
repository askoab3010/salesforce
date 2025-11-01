import { LightningElement, track } from 'lwc';
import getChecklistResource from '@salesforce/apex/SiteShineChecklistController.getChecklistResource';

const CHECKLIST_ITEMS = [
    { id: '1', label: 'Daily Checklist', className: 'heading' },
    { id: '2', label: 'INTERIOR', className: 'heading' },
    {
        id: '3',
        label:
            'Replace any burnt-out lightbulbs and verify all light fixtures (lamps, LED discs, ceiling fixtures) are working properly.',
        className: 'item'
    },
    {
        id: '4',
        label: 'Spot-check windows, sliding doors, and shower doors to ensure they are clean.',
        className: 'item'
    },
    {
        id: '5',
        label: 'Straighten artwork and ensure it is hung properly.',
        className: 'item'
    },
    {
        id: '6',
        label: 'Ensure bedding is wrinkle-free, neatly arranged, and pillows are fluffed.',
        className: 'item'
    },
    {
        id: '7',
        label: 'Inspect accessories for good condition and neat arrangement; straighten lampshades.',
        className: 'item'
    },
    {
        id: '8',
        label: 'Stock public restrooms with toilet paper, hand soap, air freshener, and hand towels.',
        className: 'item'
    },
    {
        id: '9',
        label: 'Empty trash cans in the kitchen, public restrooms, and office - check mid-day as needed.',
        className: 'item'
    },
    { id: '10', label: 'Lower all toilet seats.', className: 'item' },
    {
        id: '11',
        label: 'Ensure the model home and Sales Office smell fresh (replace ScentAir cartridge if needed).',
        className: 'item'
    },
    {
        id: '12',
        label: 'Set the model home temperature according to division guidelines.',
        className: 'item'
    },
    {
        id: '13',
        label: 'Turn on TVs and play Taylor Morrison-branded video or approved media.',
        className: 'item'
    },
    {
        id: '14',
        label: 'Keep cabinets, pantry, drawers, and area under the kitchen sink free of clutter and trash.',
        className: 'item'
    },
    { id: '15', label: 'Play approved Taylor Morrison background music.', className: 'item' },
    { id: '16', label: 'SECURITY', className: 'heading' },
    {
        id: '17',
        label: 'Disarm and check the security panel for sensor issues or low battery alerts.',
        className: 'item'
    },
    { id: '18', label: 'Ensure all panic buttons are fully charged.', className: 'item' },
    {
        id: '19',
        label: 'Confirm all security cameras are visible on the Sales Office monitor.',
        className: 'item'
    },
    { id: '20', label: 'EXTERIOR', className: 'heading' },
    { id: '21', label: 'Remove weeds and trash from flowerbeds.', className: 'item' },
    {
        id: '22',
        label: 'Clear cobwebs and insect nests from ceilings and corners in outdoor areas.',
        className: 'item'
    },
    { id: '23', label: 'Keep lead walks clear of debris.', className: 'item' },
    {
        id: '24',
        label: 'Follow national communication guidelines regarding the American flag (when to raise/lower).',
        className: 'item'
    },
    { id: '25', label: 'SALES OFFICE', className: 'heading' },
    { id: '26', label: 'Ensure the ISO is turned on and functioning properly.', className: 'item' },
    { id: '27', label: 'Keep the workspace clean and organized.', className: 'item' },
    {
        id: '28',
        label: 'Maintain a tidy copy room stocked with brooms, signs, storage, and wire stakes.',
        className: 'item'
    },
    { id: '29', label: 'Ensure all maps are current and up to date.', className: 'item' },
    { id: '30', label: 'Have at least six hard hats available in the Sales Office.', className: 'item' },
    { id: '31', label: 'AS NEEDED', className: 'heading' },
    {
        id: '32',
        label: 'Place "Available" or "Sold" signs on released lots, following placement guidelines.',
        className: 'item'
    },
    {
        id: '33',
        label: 'Display current marketing materials in designated areas; remove outdated items.',
        className: 'item'
    },
    {
        id: '34',
        label: 'Restock Experience beverages and snacks; store personal food in the bottom refrigerator drawer.',
        className: 'item'
    },
    { id: '35', label: 'Check that all doors open smoothly and do not squeak.', className: 'item' },
    { id: '36', label: 'Confirm model cleaning has been completed.', className: 'item' },
    { id: '37', label: 'Ensure stakes/frames look fresh and clean.', className: 'item' },
    {
        id: '38',
        label: 'Use riders to highlight selling features or promote current marketing campaigns.',
        className: 'item'
    },
    {
        id: '39',
        label: 'Ensure the front door is clean, undamaged, and opens without squeaking.',
        className: 'item'
    },
    { id: '40', label: 'Monthly Checklist (Send First Wednesday)', className: 'heading' },
    { id: '41', label: 'Ensure floor mats are in place and in good condition.', className: 'item' },
    {
        id: '42',
        label: 'Check that lot signs look fresh and are not faded or sun-bleached.',
        className: 'item'
    },
    {
        id: '43',
        label: 'Verify front door handle keypad is operating and fully charged.',
        className: 'item'
    },
    { id: '44', label: 'Replace any tattered flags (U.S. or marketing).', className: 'item' },
    {
        id: '45',
        label: 'Inspect interior model walls for chips, marks, or scuffs.',
        className: 'item'
    },
    {
        id: '46',
        label: 'Ensure window treatments are clean and in good condition (replace if stretched or sun-bleached).',
        className: 'item'
    },
    {
        id: '47',
        label: 'Check all interior and exterior furniture for good condition and proper function.',
        className: 'item'
    },
    {
        id: '48',
        label: 'Ensure non-sales office garages are clean and free of clutter.',
        className: 'item'
    },
    {
        id: '49',
        label: 'Notify the model team of any used towels or missing accessories.',
        className: 'item'
    },
    {
        id: '50',
        label: 'Confirm towel racks and shelving are securely attached to walls.',
        className: 'item'
    },
    {
        id: '51',
        label: 'Quarterly Checklist (Also complete monthly checklist in Jan, Apr, Jul, Oct)',
        className: 'heading'
    },
    { id: '52', label: 'Ensure parking area is clean; repaint lines as needed.', className: 'item' },
    {
        id: '53',
        label: 'Check "Future Homeowner Parking" signs for fresh paint, proper alignment, and no damage.',
        className: 'item'
    },
    {
        id: '54',
        label: 'Coordinate with superintendent to refresh seasonal landscaping (new color, mulch, replace dead plants).',
        className: 'item'
    },
    { id: '55', label: 'Set clocks to correct time based on daylight savings.', className: 'item' },
    { id: '56', label: 'Verify all exterior lights are working properly.', className: 'item' },
    {
        id: '57',
        label: 'Ensure model signs are freshly painted, straight, and undamaged.',
        className: 'item'
    },
    { id: '58', label: 'Who to Contact When', className: 'heading' },
    {
        id: '59',
        label: 'Furniture, Accessories, Draperies, Rugs',
        className: 'subheading'
    },
    {
        id: '60',
        label: 'DAL/HOU/AUS/DEN/CHAR/RAL: Jennifer Orendain',
        className: 'nested'
    },
    {
        id: '61',
        label: 'ATL/NAP/SAR/TPA/Treasure Coast: Denise Hodgdon',
        className: 'nested'
    },
    { id: '62', label: 'JAX/ORL: Candis Singh', className: 'nested' },
    { id: '63', label: 'INDY: Desta Ntamere', className: 'nested' },
    { id: '64', label: 'PCNW/SAC/BAY/SOCAL/LV/PHX: Lisa Perlman', className: 'nested' },
    {
        id: '65',
        label: 'Model Monitoring & Panic Buttons',
        className: 'subheading'
    },
    {
        id: '66',
        label: 'Ambur Turnage modelsupport@taylormorrison.com',
        className: 'nested'
    },
    { id: '67', label: 'Brandon Mccoy bmccoy@safestreets.com', className: 'nested' },
    {
        id: '68',
        label: 'IT Equipment (ISO, Copier/Printer, Wireless Speakers) - Division or Regional IT support',
        className: 'item'
    },
    {
        id: '69',
        label: 'Hard Hats - Construction Coordinator or Division Cadence Administrator/Manager',
        className: 'item'
    },
    {
        id: '70',
        label: 'Esplanade Merch (Missing Items) - Jordan Mocilnikar',
        className: 'item'
    },
    {
        id: '71',
        label: 'Note: Taylor can add this contact list to the Portrait page.',
        className: 'note'
    }
];

export default class SiteShineChecklist extends LightningElement {
    title = 'Site Shine Daily Checklist';
    checklistItems = CHECKLIST_ITEMS;
    @track downloadUrl;
    @track error;

    connectedCallback() {
        getChecklistResource()
            .then(result => {
                this.downloadUrl = result?.downloadUrl;
                this.error = undefined;
            })
            .catch(err => {
                this.error =
                    err?.body?.message ??
                    err?.message ??
                    'Unable to load the checklist download link.';
                this.downloadUrl = undefined;
            });
    }

    get hasDownload() {
        return !!this.downloadUrl;
    }
}
