##Inspiration
Hurricane Harvey, Irma and a close tryst with the wildfires in Portland - were strong reasons to revisit how we could equip ourselves better in dealing with Disaster recovery. People are often displaced from their settlements, in need of basic, fundamental resources necessary for their survival. In such a situation, keeping a close track of the supply and demand of the affected areas, across various responding organizations, becomes essential for optimal resource distribution and sharing.

We provide an application -
for an organization to chalk out the boundary it works within - to encourage other responders to prioritize their assistance to the remaining areas.
the volunteers of the organization can update the resource requirements after assessing the needs of the affected people.
based on the urgency, these resources can then be procured and made available to those in need.
there is a common heat map that is constantly updated with an aggregated list (across the various organizations) of resource requirements in a location, ensuring a cross-organization resource collaboration.
there is also an overview dashboard to provide an overall insight into the activities of the various active organizations in the area.
with communications networks often getting affected, we also provide an offline way to input and receive updates on the resource metrics.
live feed (photos) to keep monitoring the situation and also possibly locate missing pets, etc.
a publicly accessible URL for complete visibility on the resource situation and aid being provided in disaster struck areas. The use of this visualization is two fold - to encourage people to donate to organizations assisting in the disaster recovery process and to let existing donors see how their support is being extended in these areas.

##How we built it
We build it using Esri and Nexmo APIs. Esri was used for geo fencing and to display resource data within the selected boundaries for each organization. We integrated Esri's javascript APIs into our custom event handlers, communicating with our Firebase db. Nexmo was used to provide the offline capability to send and receive information using text SMS based service.

##Challenges we ran into
Esri, Nexmo and Firebase were all new to us. We figured it all out, eventually.

##Accomplishments that we're proud of
The app, it looks pretty darn neat!

##What's next for Rahat
Enhance it to have C2C support. Currently more focused on B2B and B2C.
More work on the heap maps and map visualizations.
Integration with Nexmo's Voice APIs and have a Voice to Text service to log/update resource data from disaster victims and responders.
