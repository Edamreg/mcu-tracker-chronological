// --- RENDER FUNCTIONS ---
    // (This section starts with the formatTime and updateProgress functions...
    //  ...leave those as they are, and replace only the renderList function)

    function renderList() {
        ui.list.innerHTML = ''; // Clear existing list
        const itemsToRender = getFilteredItems();

        let itemsToShow;
        if (state.view === 'main') {
            itemsToShow = itemsToRender.filter(item => !item.skipped && !item.watched);
        } else if (state.view === 'watched') {
            itemsToShow = itemsToRender.filter(item => item.watched && !item.skipped);
        } else { // 'skipped' view
            itemsToShow = itemsToRender.filter(item => item.skipped);
        }

        // Group items by phase
        const groupedByPhase = itemsToShow.reduce((acc, item) => {
            const phase = item.phase || "No Phase";
            if (!acc[phase]) {
                acc[phase] = [];
            }
            acc[phase].push(item);
            return acc;
        }, {});

        if (itemsToShow.length === 0) {
            ui.list.innerHTML = `<div class="phase-section"><p style="padding: 20px;">No items to show.</p></div>`;
            updateProgress();
            return;
        }

        const phaseOrder = ["Phase One", "Phase Two", "Phase Three", "Multiverse Saga"];

        // Render each phase group in a collapsible section
        phaseOrder.forEach(phaseName => {
            const itemsInPhase = groupedByPhase[phaseName];
            if (!itemsInPhase || itemsInPhase.length === 0) return;

            const phaseSection = document.createElement('details');
            phaseSection.className = 'phase-section';
            
            // If a search is active, open sections with results
            if (state.searchTerm) {
                phaseSection.open = true;
            }

            const phaseSummary = document.createElement('summary');
            phaseSummary.className = 'phase-summary';
            phaseSummary.textContent = phaseName;

            const phaseContent = document.createElement('ul');
            phaseContent.className = 'phase-content';

            itemsInPhase.forEach(item => {
                const li = document.createElement('li');
                li.className = `mcu-item type-${item.type.replace(/\s+/g, '-')}`;
                li.dataset.id = item.id;
                
                const isRestorable = state.view === 'skipped';
                const actionButtonLabel = isRestorable ? '♻️' : '🚫';
                const actionButtonTitle = isRestorable ? 'Restore Item' : 'Skip Item';

                li.innerHTML = `
                    <input type="checkbox" ${item.watched ? 'checked' : ''} ${state.view !== 'main' ? 'disabled' : ''}>
                    <div class="item-details">
                        <span class="title">${item.title}</span>
                        <span class="meta-line-1">${item.parentSeries} • ${item.runtime} min • ${item.type}</span>
                        <span class="meta-line-2">${item.phase} • Released: ${item.releaseDate}</span>
                    </div>
                    <div class="item-actions">
                        <button class="skip-btn" title="${actionButtonTitle}">${actionButtonLabel}</button>
                    </div>
                `;
                phaseContent.appendChild(li);
            });

            phaseSection.appendChild(phaseSummary);
            phaseSection.appendChild(phaseContent);
            ui.list.appendChild(phaseSection);
        });

        updateProgress();
    }
