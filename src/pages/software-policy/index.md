---
title: 'Somatic Mosaicism across Human Tissues (SMaHT) Network Software Policy'
layout: '~/layouts/MarkdownLayout.astro'
---

*Version 1.1 – Dated February 15, 2024*  
SMaHT Website: [https://smaht.org/](https://smaht.org/)
SMaHT Data Portal: [https://data.smaht.org/](https://data.smaht.org/)

# I. Basis

This policy is based on the 4D Nucleome Project software sharing policy.

# II. Rationale

*To ensure the reproducibility of analyses and encourage software reuse.*

* Developers of new SMaHT-related software will make their programs, including source code, freely available to the SMaHT Network (“Network”) and to the public. Examples include data processing pipelines and implementations of statistical analyses, data visualization, and modeling tools developed by SMaHT-funded groups to process and/or analyze data produced by the Network. Developers are strongly encouraged to integrate support for data format standards agreed upon by the SMaHT Network into their software.

SMaHT Network distinguishes two software release tiers:

* Tier 1 concerns release to the Network members  
* Tier 2 concerns release to the public  
*
# III. What to Release  
* The Network requires the release in the open online repositories of analysis pipelines used for major SMaHT products. The network requires the release of software tools and pipelines used to process any released data and used for major analyses and modeling in planned SMaHT publications. When released with specific datasets or data modeling applications, the software should be released with the parameter files that would allow fully reproducible runs and a minimum sample, example, or text data set. Furthermore, a complete description of all external dependencies (such as libraries and their specific versions) of the software needs to be provided. We also strongly encourage the release of software and Docker or Singularity images to increase usefulness to multiple groups within the network and in the broader community.  
*
# IV. When to Release  
  The decision of when software will be released should balance the benefit to the network and the broader community against the labor involved in software release and maintenance. Software tools for data analysis and processing should be released as soon as they are sufficiently stable and no later than the time of the data release (according to the Tier system described at the beginning of this document). Other software should be released with the release of the manuscript/preprint according to the publication policy and the Tier system.

**Software released only within the network (Tier 1\) cannot be used in any publications or preprint of network members, whether for projects funded by SMaHT or otherwise.** By requiring that any software used to generate hypotheses or results presented in a publication is publicly available (Tier 2), we will enable the broader community to repeat studies and reproduce findings.

# V. How to Release  

* Tier 2 (i.e. released to the public) software should be released by version-controlled public repositories (e.g. Github, GitLab, BitBucket). These repositories should be linked via the SMaHT DAC or SMaHT Data Portal (<https://data.smaht.org>). Software should be well-documented, and there should be a contact person for questions. Software development should continue through version-controlled deposition, and the software version used to generate each dataset must be documented using a consistent versioning scheme, e.g. Semantic Versioning (<http://www.semver.org>).

SMaHT-funded software should be released under an open-source license. However, network members are responsible for following any relevant institutional rules concerning software licensing.

To avoid multiple versions of the same software being maintained by different network members, network members who wish to contribute modifications of shared software tools (both Tier 1 and Tier 2\) should do so using standard collaborative software development procedures such as Pull Requests on GitHub repositories. They should also clearly document their changes and the rationale for the modifications.

The network encourages individual groups to list, describe, and link their relevant software in the following SMaHT Resource Tracking sheet. Recording this information will inform consortium members about available and developed tools and stimulate software reuse, comparison, and co-development.

# VI. Who Releases  

* Developers who release software publicly (Tier 2\) should ensure it is included in the SMaHT resource catalog.  

# VII. Other Considerations  
* **Accompanying publications**: Besides releasing well-documented code, we strongly encourage developers to publish citable software descriptions. We recommend that authors describe their software in methodological papers so that they can receive credit for their work. These can be published in conventional journals and/or disseminated pre-publication through preprint servers (e.g. bioRxiv).

**Dissemination of more complex pipelines**: Multiple software components are routinely combined to generate intermediate datasets for most complex analyses. For the reproducibility of these results, analysts should document all software components used and the specific software versions utilized. We encourage (1) documenting these components; (2) providing scripts that reproduce key figures in SMaHT publications; (3) establishing reusable, publicly accessible analysis pipelines (e.g. Galaxy, virtual machines, Docker, workflows compatible with systems provided by (commercial) cloud-based analysis providers); and (4) linking these through the SMaHT Data Portal.  
**Current and future support for released software**: Tier 2 Software that will be released for publication and to repositories (e.g., Github) should state the types and degree of support users can expect for them to download, run, and troubleshoot the available software as well as whether or not updates and “fixes” should be expected. In many cases, the expectation is that there is minimal support for users, ie, the software is provided for reproducibility purposes and not for outside use. The state of the software should be documented in a README file that is part of the software.

## Contributors

**SMaHT Policy Working Group**  
*Co-Chairs:* Jimmy Bennett (PI \- UW-SCRI GCC), Lucinda Fulton (PI \- OC), Heather Lawson (PI \- OC)  
*Document Lead:* Alexej Abyzov (PI \- Mayo Clinic TTD)

**SMaHT Network Grantees**  

## Revisions

●      Version 1.0 – DATE OF APPROVAL
